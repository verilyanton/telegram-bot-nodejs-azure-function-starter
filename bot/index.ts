import {seniorComposer} from "./composers/senior.composer";
import {startComposer} from "./composers/start.composer";
import {juniorComposer} from "./composers/junior.composer";
import {helpComposer} from "./composers/help.composer";
import {generalInfoComposer} from "./composers/general_info.composer";
import {communicationComposer} from "./composers/communication.composer";

const {Telegraf} = require("telegraf")
const {message} = require("telegraf/filters")

require("dotenv").config();

const {BOT_TOKEN, WEBHOOK_ADDRESS} = process.env;

const bot = new Telegraf(BOT_TOKEN, {telegram: {webhookReply: true}});
bot.telegram.setWebhook(WEBHOOK_ADDRESS);

bot.use(startComposer);
bot.use(juniorComposer);
bot.use(seniorComposer);
bot.use(helpComposer);
bot.use(generalInfoComposer);
bot.use(communicationComposer);

bot.on(message('sticker'), (ctx) => ctx.reply('👍'))
bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))