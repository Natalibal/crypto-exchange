"use strict"

const TELEGRAM_BOT_TOKEN = "6430685070:AAH_6l28rMGbrVTujz7Pzap1U10JUUZwhcE";
const TELEGRAM_CHAT_ID = "-4035248833";

const message = "TEST:%0A - Done"

const createUrl = (obj) => {
    const data = {
        id: obj.exchangeNumber,
        currTo: obj.currExchangeGet.shortName,
        currFrom: obj.currExchangeGive.shortName,
        userEmail: obj.customerData.email,
        userWallet: obj.customerData.wallet,
        userAmount: obj.currExchangeGiveAmount,
    }

    let msg = `New Transaction Request %0A`+ 
    `<tg-emoji emoji-id="5368324170671202286">👍</tg-emoji>`+
    `ID: ${data.id} %0A`+
    `From: ${data.currFrom} %0A`+ 
    `To: ${data.currTo} %0A`+ 
    `Amount: ${data.userAmount} %0A`+ 
    `Wallet: ${data.userWallet} %0A`+ 
    `Email: ${data.userEmail}`

    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage?chat_id=${TELEGRAM_CHAT_ID}&text=${msg}&parse_mode=html`
    return url
}

export const fetchTelegram = async (obj) => {
    try {
        const response = await fetch(createUrl(obj), {method: 'GET'})
        if(response.ok) {
            console.log("Exchange message was sended to Telegram");
        } else {
            throw new Error(response.statusText)
        }
    } catch(error) {
        console.log('There was an error during "fetchTelegram": ', error.message);
    }
}