const TelegramBot = require('node-telegram-bot-api');

const token = process.env.TOKEN;

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, 
`Welcome to Meta Esport 🎮

/pc - View PCs
/price - Prices`);
});

bot.onText(/\/pc/, (msg) => {
  bot.sendMessage(msg.chat.id, "🖥 PCs coming soon...");
});

bot.onText(/\/price/, (msg) => {
  bot.sendMessage(msg.chat.id, "💰 1 hour = 7000₮");
});
