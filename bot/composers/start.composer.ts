import { Composer } from 'telegraf';

export const startComposer = Composer.command('start', async ctx => {
    const message = `
    Salut, ${ctx.message.from.first_name ? ctx.message.from.first_name : "who are you?"}!
  
    Aici poți gasi orice informatie de care ai nevoie 
    in politica organizatie EcoVisio, 
    pentru orientare mai buna in bot sunt 2 directii
    Junior si Senior
    
    Tot asa se poate sa te uiti la general cu ajutorul comenzii /help`;
    await ctx.reply(message);
});