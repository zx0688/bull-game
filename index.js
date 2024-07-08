const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = '7373260082:AAEHUW41sZeLIy8z2wy29j0nxXl-F0Hchsc';
const webapp = '../App/index.html';
// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;

    // send a message to the chat acknowledging receipt of their message
    await bot.sendMessage(chatId, 'Received your message', {

        reply_markup:
        {
            inline_keyboard: [

                [{ text: 'ывафаыффа', web_app: { url: webapp } }]
            ]
        }
    });
});