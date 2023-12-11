import langChangePayment from './lang/langChangeMain.js';

function getObjectFromLocalStorage(key) {
    const newObject = window.localStorage.getItem(key);
    return JSON.parse(newObject)
}

function  setData (text, key) {
    let element = document.getElementById(key);
    element.textContent = text;
}


document.addEventListener('DOMContentLoaded', () => {
    let exchangeData = getObjectFromLocalStorage("exchangeData")
  

    setData(exchangeData.exchangeNumber,"orderMain"); 
    setData(exchangeData.exchangeNumber,"orderSecond"); 

    const exchange = document.getElementById('exchange');
    exchange.innerHTML = ` 
    <h6 data-lang="rejected-exchange">Exchange</h6>
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

    document.querySelector('#final__order-main-btn')
        .addEventListener('click', toTheMainPage);

    document.querySelector('#final__order-chat-btn')
        .addEventListener('click', onlineChat);

    function toTheMainPage(url) {
        window.open('./index.html', "_self"); 
    }   

    function onlineChat() {
        window.open('https://t.me/Official_Coinvision', "_self");
    }

    langChangePayment();
})