const { Telegraf, Markup } = require('telegraf');

require('dotenv').config();
const my_const = require('./const');
const bot = new Telegraf(process.env.BOT_TOKEN);
bot.start((ctx) => ctx.reply(`Привет ${ctx.message.from.first_name ? ctx.message.from.first_name : 'незнакомец'}!Меня зовут .... и я создан для того, чтобы помочь тебе с рекламой.

Здесь ты можешь найти телеграмм каналы, подходящие для тебя и твоей рекламы, а также создать карточку с описанием своей группы для поиска рекламодателей.

Но чем же этот бот отличается от обычных чатов-бирж для поиска рекламы? Для того, чтобы узнать об этом подробнее выбери подходящую для тебя категорию ниже👇

Если ты рекламодатель и ищешь подходящую тебе группу, то жми сюда 👉/admin
Если ты админ группы и хочешь, чтобы тебя нашел рекламодатель, то жми сюда 👉/advert`));
bot.command('admin', async (ctx)=> {
    try{
   await ctx.reply ('Так, так. Значит ты админ группы и ищешь рекламодателя. Хорошо, давай я расскажу тебе, как я могу помочь и освободить твое время от вечного поиска. Для этого тебе достаточно заполнить карточку, которая кратко опишет твою группу и расскажет о ее преимуществах. Хочешь попробовать? Жми далее!', Markup.inlineKeyboard(
    [
        [Markup.button.callback('Далее', 'btn-1')]
    ]
   ))
} catch(e) {
    console.error(e)
}
});
bot.command('advert', async (ctx)=> {
    try{
   await ctx.reply('Хорошо, значит ты рекламодатель и ищешь группу, подходящую под твою рекламу. Тогда давай я расскажу тебе, как я могу помочь сэкономить твое время в поиске группы.Для этого тебе нужно заполнить карточку, где ты укажешь все интересующие тебя параметры группы. Хочешь попробовать? Жми далее!', Markup.inlineKeyboard(
      [
        [Markup.button.callback('Далее', 'btn-2')]
      ]  
    ))
} catch(e) {
        console.error(e)
}
});

bot.action('btn-1', (ctx) => {
    ctx.reply('Hello botick')
}); 
bot.action('btn-2', (ctx) => {
    ctx.reply('hahha sdelaem bota')
});


bot.command('info', (ctx) => {
    ctx.reply('Если вы обнаружили какую-то неполадку или у вас не работает бот,а также если у вас есть какие-то предложения и пожелания, пишите сюда 👉 @C_kybik')
});
bot.help((ctx) => ctx.reply(my_const.commands));
bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));