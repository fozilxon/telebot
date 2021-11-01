const Telegraf = require("telegraf");
// const { Extra, Markup } = Telegraf;
const Extra = require("telegraf/extra");
const Markup = require("telegraf/markup");
const dotenv = require("dotenv");
dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.use(Telegraf.log());

bot.command("start", (ctx) => {
  return ctx.replyWithHTML(
    "Assalomu alaykum qadrdon, <b>" + ctx.message.from.first_name + "</b>",
    Extra.markup(
      Markup.inlineKeyboard([
        Markup.callbackButton("Valeykum assalom", "fozil"),
      ])
    )
  );
});

bot.action("fozil", (ctx) => {
  ctx.reply(
    "<i>Nima buyurtma qilasiz?</i>",
    Extra.HTML().markup(
      Markup.inlineKeyboard([
        [
          Markup.callbackButton("Hot dog🌭", "hotdog"),
          Markup.callbackButton("Burger🍔", "burger"),
          Markup.callbackButton("Lavash🌯", "lavash"),
        ],
        [
          Markup.callbackButton("Fri🍟", "fri"),
          Markup.callbackButton("Ichimliklar🥤", "ichimlik"),
        ],
      ])
    )
  );
});

bot.action("hotdog", (ctx) => {
  ctx.replyWithPhoto(
    {
      source: "hotdog.jpg",
    },
    Extra.caption(
      `
Hot dog
price: 9 000som
Tarkibi: sosiska, bulochka, ketchup, mayonez,pomidor,bodrin                
    `
    ).markdown()
  );
});
bot.action("burger", (ctx) => {
  ctx.replyWithPhoto(
    {
      source: "burger.jpg",
    },
    Extra.caption(
      `
Burger
price: 27 000som
Tarkibi: sosiska, bulochka, ketchup, mayonez,pomidor,bodrin                
                
        `
    ).markdown()
  );
});

bot.action("lavash", (ctx) => {
  ctx.replyWithPhoto(
    {
      source: "lavash.jpg",
    },
    Extra.caption(
      `
  Lavash
  price: 22 000som
  Tarkibi: gosht, xamir, ketchup, mayonez,pomidor,bodrin                
              
          `
    ).markdown()
  );
});

bot.action("fri", (ctx) => {
  ctx.replyWithPhoto(
    {
      source: "fri.jpg",
    },
    Extra.caption(
      `
    Lavash
    price: 5 000som
    Tarkibi: kartoshka, yog, tuz
                
            `
    ).markdown()
  );
});

bot.action("ichimlik", (ctx) => {
  ctx.reply(
    "Xursandman.Ichimliklarga buyurtma berish uchun quyidagi tugmalardan birini bosing",
    Markup.keyboard([
      ["cofe☕️", "limon choy☕️"],
      ["kokteyl🥤", "suv💧"],
      ["qora choy☕️", "cola🍷"],
    ])
      .oneTime()
      .resize()
      .extra()
  );
});

bot.hears("cofe☕️", (ctx) => {
  ctx.reply(
    "cofeni tanlang",
    Markup.keyboard([
      ["kopuchino☕️", "late☕️"],
      ["3 v 1", "Milshtek☕️"],
      ["Jacoks☕️", "nestcofe☕️"],
      ["menu chiqish🔚"],
    ])
      .oneTime()
      .resize()
      .extra()
  );
});

bot.hears("menu chiqish🔚", (ctx) => {
  ctx.reply(
    "<i>Nima buyurtma qilasiz?</i>",
    Extra.HTML().markup(
      Markup.inlineKeyboard([
        [
          Markup.callbackButton("Hot dog🌭", "hotdog"),
          Markup.callbackButton("Burger🍔", "burger"),
          Markup.callbackButton("Lavash🌯", "lavash"),
        ],
        [
          Markup.callbackButton("Fri🍟", "fri"),
          Markup.callbackButton("Ichimliklar🥤", "ichimlik"),
        ],
      ])
    )
  );
});

bot.launch();
