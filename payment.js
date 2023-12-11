
import langChangeMain from './lang/langChangeMain.js';

function myFunction(selector) {
    var copyText = document.getElementById(selector);
    var range = document.createRange();
    var selection = window.getSelection();
    range.selectNodeContents(copyText);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand("copy");
}

const paidBtn = document.querySelector("#paidBtn") 
paidBtn.addEventListener("click", payment) 
 

function payment() {
    window.open('/verification.html', "_self");
}

function getObjectFromLocalStorage(key) {
    const newObject = window.localStorage.getItem(key);
    return JSON.parse(newObject)
}

function checkLocalStorageItem(key) {
    return (!!localStorage.getItem(key))
}

document.addEventListener('DOMContentLoaded', () => {
    let exchangeData;

    if (checkLocalStorageItem("exchangeData")) {
        exchangeData = getObjectFromLocalStorage("exchangeData")
    } else {
        throw new Error('No exchange data provided')
    }

    function setData(text, key) {
        let element = document.getElementById(key);
        element.textContent = text;
    }

    setData(exchangeData.exchangeNumber, "orderMain");

    setData(exchangeData.exchangeNumber, "orderSecond");

    setData(exchangeData.currExchangeGive.wallet, "wallet");


    const walletImg = document.getElementById("walletImg");
    walletImg.innerHTML = `
      <img src="./Image/${exchangeData.currExchangeGive.imgName}.png" alt="" class="currencyImg">
   `
    const paymentWalletCurr = document.getElementById('paymentWalletCurr');
    paymentWalletCurr.innerHTML = `
    <img src="./Image/${exchangeData.currExchangeGive.imgName}.png" alt="" class="currencyImg">
    <div class="payment__order-currencyData">
       <span data-lang="payment-wallet2">Amount</span>
        <div><span id="walletCurr">${exchangeData.currExchangeGiveAmount}</span> <span>${exchangeData.currExchangeGive.shortName}</span></div>
    </div>
    <img src="./Icon/walletIcon.png" alt="" class="payment__order-currencyIcon" id='exchangeAmount'>
    `
    const exchange = document.getElementById('exchange');
    exchange.innerHTML = `
    <h6 data-lang="payment-exchange">Exchange</h6>
    <div class="payment__exchange-to">
        <div class="payment__exchange-icon" id="exchangeIcon">
          <img src="./Image/${exchangeData.currExchangeGive.imgName}.png" alt="" class="currencyImg">
        </div>
        <p id="numberTo">${exchangeData.currExchangeGiveAmount} ${exchangeData.currExchangeGive.shortName}</p>

    </div>
    <div class="payment__exchange-from">

        <div class="payment__exchange-icon" id="iconFrom">
           <img src="./Image/${exchangeData.currExchangeGet.imgName}.png" alt="" class="currencyImg">
        </div>
        <p id="numberFrom">${exchangeData.currCalculation.toFixed(3)} ${exchangeData.currExchangeGet.shortName}</p>
    </div>
    `
    //Копіювання текста
    const addListenerByid = (selector, type, copyToClipboard, copyData, dataSelector) => {
        const node = document.getElementById(selector)

        node.addEventListener(type, () => {
            myFunction(dataSelector)
            copyToClipboard(copyData)
        })
    }

    const copyToClipboard = (copyData) => {
        const modal = document.querySelector('[data-modal]')
        showMyModal(modal, copyData)
    }

    addListenerByid('exchangeAmount', 'click', copyToClipboard, exchangeData.currExchangeGiveAmount, 'walletCurr');
    addListenerByid('walledNumber', 'click', copyToClipboard, exchangeData.currExchangeGive.wallet, 'wallet');

    function closeModal(node) {
        node.classList.remove('modal--active')
        node.classList.add('modal--hide')
        setTimeout(() => { node.close() }, 1000)
        node.lastElementChild.textContent = ''
    }
    function showMyModal(node, text) {
        node.showModal()
        node.lastElementChild.textContent = text
        node.classList.remove('modal--hide')
        node.classList.add('modal--active')
        setTimeout(() => { closeModal(node) }, 2000)
    }
    langChangeMain();
})

