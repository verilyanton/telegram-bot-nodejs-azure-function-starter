const { Composer, Markup } = require('telegraf')
const composer = new Composer()

composer.start((ctx) => {
  ctx.reply('start', Markup.keyboard([
    [Markup.button.callback("😝 Junior") ,Markup.button.callback("🥸 Senior")]
    ]).resize())
  }
)

composer.help(async (ctx) => {
  try {
    await ctx.replyWithHTML('command')
  } catch (e) {
    console.error('error in Help command', e)
  }
})

module.exports = composer