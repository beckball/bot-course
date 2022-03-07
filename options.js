module.exports = {
    gameOptions: {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: '1', callback_data: 'click1'},{text: '2', callback_data: 'click2'},{text: '3', callback_data: 'click2'}],
            [{text: '4', callback_data: 'click1'},{text: '5', callback_data: 'click2'},{text: '6', callback_data: 'click2'}],
            [{text: '7', callback_data: 'click1'},{text: '8', callback_data: 'click2'},{text: '9', callback_data: 'click2'}],
            [{text: '0', callback_data: 'click1'}],

        ]
    })
    },

    againOptions: {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: 'Again', callback_data: '/again'}],

        ]
    })
    }
}
