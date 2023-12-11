import langChangeMain from './lang/langChangeMain.js';

function getObjectFromLocalStorage(key) {
    const newObject = window.localStorage.getItem(key);
    return JSON.parse(newObject)
}
const sendToLocalStorage = (key, data) => {
    window.localStorage.setItem(key, JSON.stringify(data));
}

document.addEventListener('DOMContentLoaded', () => {
    let exchangeData = getObjectFromLocalStorage("exchangeData")

   function  setData (text, key) {
        let element = document.getElementById(key);
        element.textContent = text;
    }

setData(exchangeData.exchangeNumber,"orderMain"); 
setData(exchangeData.exchangeNumber,"orderSecond"); 



const orderWallet = document.getElementById('orderWallet');
      orderWallet.innerHTML =
          `
          <img src="./Image/${exchangeData.currExchangeGive.imgName}.png" alt=""  class="currencyImg">
                <div class="verification__order-wallet-txt" id="">
                    <p id="wallet" data-lang="verification-wallet">Wallet</p>
                    <div class="verification__order-wallet-address">${exchangeData.currExchangeGive.wallet} </div>
                </div>
                <div class="verification__order-wallet-amount">
                    <p class="verification__order-wallet-p" data-lang="verification-amount">Amount:</p>
                    <div class="verification__order-wallet-amount_1">
                        <div class="verification__order-wallet-amount-data">${exchangeData.currExchangeGiveAmount}</div>
                        <div class="verification__order-wallet-amount-currency">${exchangeData.currExchangeGive.shortName}</div>
                    </div>
                </div>
          `

    const exchange = document.getElementById('exchange');
    exchange.innerHTML = ` 
    <h6 data-lang="verification-exchange">Exchange</h6>
    <div class="payment__exchange-to">
        <div class="payment__exchange-icon" id="exchangeIcon">
          <img src="./Image/${exchangeData.currExchangeGive.imgName}.png" alt="" class="currencyImg"  class="currencyImg">
        </div>
        <p id="numberTo">${exchangeData.currExchangeGiveAmount} ${exchangeData.currExchangeGive.shortName}</p>
    </div>
    <div class="payment__exchange-from">

        <div class="payment__exchange-icon" id="iconFrom">
           <img src="./Image/${exchangeData.currExchangeGet.imgName}.png" alt="" class="currencyImg"  class="currencyImg">
        </div>
        <p id="numberFrom">${exchangeData.currCalculation.toFixed(3)} ${exchangeData.currExchangeGet.shortName}</p>
    </div>
    `


    // Verification check with timer
    let setCheckTimer;
    const baseVaitMinutes = 0.5
    let isChecked =  exchangeData.transactionVerefication = true;
    setCheckTimer = setInterval(timerIntervalAction, 1000)

    const url = {
        success: './final.html',
        rejected:'./rejected.html',
    }
    function changePageLocation(url) {
        window.location.href = url;
    }

    function resetTiveAndVerification() {
        exchangeData.vereficationTime = undefined
        sendToLocalStorage('exchangeData', exchangeData)
    }
    function checkTransaction(url) {
        if(isChecked) {
            changePageLocation(url.success)
            resetTiveAndVerification()
        } else {
            changePageLocation(url.rejected)
            resetTiveAndVerification()
        }
    }
    function getParseDate() {
        return Date.now()
    }
    function checkVerificationTimePassed(currDate, vereficationTime) {
       
        if (typeof vereficationTime === 'undefined') {
            removeTimer()
            return
        }

       
        if(vereficationTime) {
            const baseMilisecondsLimit = 1000 * 60 * baseVaitMinutes
            const passMiliseconds = currDate - vereficationTime

            if (passMiliseconds < baseMilisecondsLimit) {
                return
            }

            if (passMiliseconds > baseMilisecondsLimit) {
                removeTimer()
               
                checkTransaction(url);
            }
        }
    }

    const verificationBtn = document.getElementById('verificationBtn')
    function removeEventListener() {
        verificationBtn.removeEventListener('click', verificationBtnFoo);
        verificationBtn.textContent = 'Checking...'
    }
    function verificationBtnFoo() {
        exchangeData.vereficationTime = getParseDate()
        setCheckTimer = setInterval(timerIntervalAction, 1000)
        sendToLocalStorage('exchangeData', exchangeData)
        removeEventListener()
    }

    function timerIntervalAction() {
        checkVerificationTimePassed(getParseDate(), exchangeData.vereficationTime)
    }
    function removeTimer() {
        clearInterval(setCheckTimer)
    }

    if (exchangeData.vereficationTime > 0) {
        removeEventListener()
    }
    verificationBtn.addEventListener('click', verificationBtnFoo);
    langChangeMain();
})


