import {Composer} from "telegraf";

export const helpComposer = Composer.command('help', async ctx => {
    await ctx.replyWithHTML(`  
<b>Commands:</b>
/start - 
/help -
/junior - 
/senior - 
/general -`
    )
});