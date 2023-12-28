import {Composer, Markup} from "telegraf";

export const juniorComposer = Composer.hears('😝 Junior', async (ctx) => {
    await ctx.replyWithHTML('<b>Informații pentru Junior</b>', Markup.inlineKeyboard(
            [
                [Markup.button.callback('Informații generale despre EcoVisio 🖼', 'btn_category1')],
                [Markup.button.callback('Internal policies and regulations 📜', 'btn_category2')],
                [Markup.button.callback('Organizational chart 🏰', 'btn_category3')],
                [Markup.button.callback('Working program 📆', 'btn_category4')],
                [Markup.button.callback('Working instruments 🛠', 'btn_category5')],
                [Markup.button.callback('Projects coordination 🧩', 'btn_category6')],
                [Markup.button.callback('Communication in EcoVisio 📩', 'btn_category7')],
                [Markup.button.callback('Documentation management 📗', 'btn_category8')],
            ]
        )
    );
});