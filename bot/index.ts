const { Telegraf } = require('telegraf')
const { message } = require('telegraf/filters')

import { startComposer } from "./composers/start.composer";

require('dotenv').config();

// const devMode = process.env.NODE_ENV === 'development';
const { BOT_TOKEN, WEBHOOK_ADDRESS } = process.env;

const bot = new Telegraf(BOT_TOKEN, { telegram: { webhookReply: true } });
bot.telegram.setWebhook(WEBHOOK_ADDRESS);

bot.use(startComposer);
// bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on(message('sticker'), (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))