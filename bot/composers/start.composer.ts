import { Composer } from 'telegraf';
import { parse } from 'yaml';
import { readFileSync } from "fs";

const locale = parse(readFileSync('../locales/en.yaml', 'utf8'));


export const startComposer = Composer.command('start', async ctx => {
    await ctx.reply(locale.start);
});