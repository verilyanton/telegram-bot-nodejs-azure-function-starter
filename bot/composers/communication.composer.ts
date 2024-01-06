import {Composer, Markup} from "telegraf";


export const communicationComposer = Composer.action('btn_category7', async ctx => {
    await ctx.replyWithHTML('<b>Communication in EcoVisio 📩</b>', Markup.inlineKeyboard([
        [Markup.button.url('Internal communication', 'https://t.me/c/1862306523/120')],
        [Markup.button.url('External communication', 'https://t.me/c/1862306523/122')],
    ]));
});