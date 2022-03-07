const TelegramApi = require('node-telegram-bot-api')
const{gameOptions, againOptions} = require('./options')
const token = '5285372411:AAF0iFjZDJVn3C7Hi7-LKOGv9OmEMYjAgtU'

const bot = new TelegramApi(token, {polling: true})

const chats = {}



const startGame = async (chatId) => {
    await bot.sendMessage(chatId, `Сейчас загадаю цифру от 0 до 9, а ты угадай`)
    const randomNumber = Math.floor(Math.random() * 10)
    chats[chatId] = randomNumber;
    await bot.sendMessage(chatId, 'Отгадай', gameOptions);
}

const start = () => {
    bot.setMyCommands([
        {command: '/start', description: 'Начальное приветствие'},
        {command: '/info', description: 'Получить информацию о пользователе'},
        {command: '/game', description: 'Сыграть в игру'},
        {command: '/sdd', description: 'Сыграть в игру'},
        ])

    bot.on('message', async msg => {
        const text = msg.text;
        const chatId = msg.chat.id;

        if (text === '/start') {
            await bot.sendSticker(chatId, 'https://tgram.ru/wiki/stickers/img/tproger/png/10.png')
            return bot.sendMessage(chatId, `Добро пожаловать в чат БРАТААААН`)
        }
        if (text === '/info') {
            return bot.sendMessage(chatId, `Тебя зовут ${msg.from.first_name} ${msg.from.last_name}`)
        }
        if (text === '/game') {
            return startGame(chatId);
        }
        return bot.sendMessage(chatId, 'Не понял команду')
    })

    bot.on('callback_query', async msg => {
        const data = msg.data;
        const chatId = msg.message.chat.id;
        if (data === '/again') {
            return startGame(chatId);
        }
        if (data === chats[chatId]) {
            return await bot.sendMessage(chatId, `правильно, цифра была ${chats[chatId]}`, againOptions)
        } else {
            return await bot.sendMessage(chatId, `нееееет, цифра была ${chats[chatId]}`, againOptions)
        }
        bot.sendMessage(chatId, `Твой выбор ${data}`)
        console.log(msg)
    })

}

start ()





















