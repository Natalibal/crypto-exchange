import currenciesConfig from "./config.js";
import exchangeData from "./js/_exchangeData.js";
import createArrayFromObject from './js/createObjectFromArray.js'
import createExchangeItemList from './js/createExchangeItemsList.js'
import filterExchangeTabs from './js/filterExcjangeTabs.js'
import handleTabsActiveStyle from './js/handleTabsActiveStyle.js'
import filterExchangeItems from './js/filterExchangeItems.js'
import generateOrderNumber from './js/generateOrderNumber.js'
import langChangeMain from './lang/langChangeMain.js'
import { checkLocalStorageItem } from './js/localStorage.js'

// NODES
const columns = document.querySelectorAll('.column');
const infoBox = document.querySelector('.info-box');
const infoText = document.getElementById('info-text');
const columnsMedium = document.querySelectorAll('.column__medium');
const infoBoxMedium = document.querySelector('.info-box-medium');
const infoTextMedium = document.getElementById('info-text__medium');
const searchGive = document.getElementById('currencySearchGive');
const searchGet = document.getElementById('currencySearchGet');
const baseCurrInput = document.getElementById('base');
const baseCurr = document.getElementById('currency-give');
const baseDetailsMin = document.querySelector('.converter__container-give-min');
const baseDetailsMax = document.querySelector('.converter__container-give-max');
const resultCurrInput = document.getElementById('result');
const resultCurr = document.getElementById('currency-get');
const resultDetailsMin = document.querySelector('.converter__container-get-min');
const resultDetailsMax = document.querySelector('.converter__container-get-max');
const formCalculationResult = document.getElementById('container-right-result')
const checkbox = document.getElementById('agreement');
const submitButton = document.getElementById('submitButton');


// GLOBAL VAR
const defaultExchangeItemsArray = createArrayFromObject(currenciesConfig)
let sortedData = structuredClone(defaultExchangeItemsArray)
let sortedDataMedium = structuredClone(defaultExchangeItemsArray)
const searchData = {
    give: '',
    get: ''
}
const minExchangeData = {
    amount: 100,
}

// Clear checkbox
function clearCheckbox(node) {
    console.log('clearCheckbox');
    node.checked = false
}

// Disable exchangeBtn
function disableSubmitButton(node) {
    node.disabled = true
}
disableSubmitButton(submitButton)

// Clear clearExchangeCustomerWallet
function clearExchangeCustomerWallet() {
    const customerWallet = document.getElementById('formWallet');
    customerWallet.textContent = ''
}

//check LocalStorage and clear if data exist

if (!checkLocalStorageItem(exchangeData)) {
    // localStorage.removeItem('exchangeData');
    // clearExchangeCustomerWallet()
}

// Create list based on DB object for All exchanges variants (DEFAULT)
const sortedDataCrypto = filterExchangeTabs(sortedData, 'type', 'crypto')

createExchangeItemList(sortedDataCrypto, infoText);
createExchangeItemList(sortedDataMedium, infoTextMedium);

// update the "Course details form"
const formUpdate = () => {
    const { shortName } = exchangeData.currExchangeGet
    let amount = exchangeData.currCalculation.toFixed(3)

    if (isNaN(amount)) {
        amount = 0
    }

    formCalculationResult.innerHTML = `${amount} ${shortName}`
}

//exchange Calculator
const culculateGet = () => {
    let result;
    if (typeof exchangeData.currExchangeGet === 'undefined' || typeof exchangeData.currExchangeGive === 'undefined') {
        return
    }
    const exchangeVolume = exchangeData.currExchangeGiveAmount

    if (exchangeData.currExchangeGive.shortName === exchangeData.currExchangeGet.shortName) {
        result = exchangeVolume * 1
    } else {
        result = (exchangeVolume * exchangeData.currExchangeGive.currToUSD) / exchangeData.currExchangeGet.currToUSD
    }
    //add to the node element
    resultCurrInput.value = result.toFixed(3)
    //add to the globalObject
    exchangeData.currCalculation = result
    formUpdate()

}

//clear exchange input
const clearinput = () => {
    baseCurrInput.value = ''
}

//////////////////СТРОКА ПОШУКУ.................
// Отримуємо поле вводу і результат
const clearSearch = (node) => {
    node.value = ''
}

const exchangeListSearchUpdate = (node, entry) => {
    const arr = structuredClone(defaultExchangeItemsArray);
    const result = filterExchangeItems(arr, entry)
    createExchangeItemList(result, node);
}
// Додаємо обробник події для поле вводу
const inputSearchHandler = (node, targetNode, dataObject) => {
    node.addEventListener('input', (e) => {
        dataObject = e.target.value
        exchangeListSearchUpdate(targetNode, dataObject)
    })
}
inputSearchHandler(searchGive, infoText, searchData.give);
inputSearchHandler(searchGet, infoTextMedium, searchData.get);

/////////////////ГОРИЗОНТАЛЬНА ЛІНІЯ ................
/////////////convertor__container-left-bottom

const updateExchangeItemsList = (arr, selector, parentNode, flag) => {
    let newArray = createArrayFromObject(currenciesConfig)
    let filter = selector

    // Force filter All to crypto in left column
    if (flag === 'column1' && filter === "all") {
        filter = "crypto"
    }

    if (flag === 'column1' && filter === "banks") {
        newArray = []
    }
    if (flag === 'column1' && filter === "payment") {
        newArray = []
    }

    if (filter === "all") {
        arr = newArray
    } else {
        arr = filterExchangeTabs(newArray, 'type', filter)
    }
    createExchangeItemList(arr, parentNode);
}

const defaultTextColor = '#fff';

infoBox.style.display = 'block';
let isExpanded = false;


// Add EVENT LISTENER ON TABS
columns.forEach(item => {
    item.addEventListener('click', (e) => {
        const selector = e.target.closest('.column').dataset.info.toLowerCase()
        updateExchangeItemsList(sortedData, selector, infoText, 'column1')
        handleTabsActiveStyle(columns, selector, "column--active")
        clearSearch(searchGive)
    })
})


/////////////convertor__container-left-bottom
const defaultTextColorMedium = '#fff';


infoBoxMedium.style.display = 'block';
let isExpandedMedium = false;

columnsMedium.forEach(item => {
    item.addEventListener('click', (e) => {
        const selector = e.target.closest('.column__medium').dataset.info.toLowerCase()
        updateExchangeItemsList(sortedDataMedium, selector, infoTextMedium, 'column2')
        handleTabsActiveStyle(columnsMedium, selector, "column--active")
        clearSearch(searchGet)
    })
})

// CONVERTER
const findExchangeItemData = (entry) => {
    const result = filterExchangeTabs(defaultExchangeItemsArray, 'name', entry)
    return result[0]

}

const getMinAmountToExchange = (currRate, amount) => {
    const result = amount / currRate
    return result.toFixed(2)
}

const setMinMax = (currName, min, max, minNode, maxNode) => {
    let minAmount = min
    if (isNaN(min)) {
        minAmount = '---'
    }
    minNode.lastElementChild.textContent = currName
    minNode.lastElementChild.previousElementSibling.textContent = minAmount

    maxNode.lastElementChild.textContent = currName
    maxNode.lastElementChild.previousElementSibling.textContent = max
}
const setCurrName = (name, img, node) => {
    node.querySelector('.select-exchangeCurrName').textContent = name
    node.querySelector('.converter__container-give-icon').src = `./Image/${img}.png`;
}


const handleExchangeInput = (selector, inputNode, minNode, maxNode) => {
    const itemData = findExchangeItemData(selector)
    const { name, max, min, shortName, imgName } = itemData


    setMinMax(shortName, min, max, minNode, maxNode)
    setCurrName(name, imgName, inputNode)
}

const setEventListenerToItems = (node, inputNode, minNode, maxNode) => {
    node.addEventListener('click', (e) => {
        if (e.target.dataset.type === "currencyItem") {
            const selectorNode = e.target.closest('.currencyItemElement')
            const selector = selectorNode.dataset.exchangeName
            handleExchangeInput(selector, inputNode, minNode, maxNode)
            const itemData = findExchangeItemData(selector)

            if (node.id && node.id === 'info-text') {
                clearinput()
                exchangeData.currExchangeGiveAmount = 0
                exchangeData.currExchangeGive = itemData
            }
            if (node.id && node.id === 'info-text__medium') {
                exchangeData.currExchangeGet = itemData
                clearExchangeCustomerWallet()
                exchangeData.customerData.wallet = ''
            }
        }

        clearCheckbox(checkbox)
        disableSubmitButton(submitButton)

        culculateGet()
    })
}

// InputClassValidation
const addInputClass = (selector) => {
    const element = document.querySelector(selector);
    element.classList.add('valError')
}
const removeInputClass = (selector) => {
    const element = document.querySelector(selector);
    element.classList.remove('valError')
}

// Add EVENT LISTENERs ON Items
setEventListenerToItems(infoText, baseCurr, baseDetailsMin, baseDetailsMax);
setEventListenerToItems(infoTextMedium, resultCurr, resultDetailsMin, resultDetailsMax);

const handleGiveInput = () => {
    baseCurrInput.addEventListener('input', (e) => {
        e.preventDefault()
        let inputData = e.target.value.replace(/,/g, '.')

        if (exchangeData.currExchangeGive && inputData > exchangeData.currExchangeGive.min && inputData < exchangeData.currExchangeGive.max) {
            removeInputClass('.converter__container-give-min')
            removeInputClass('.converter__container-give-max')

            exchangeData.currExchangeGiveAmount = inputData
            culculateGet()
        } else {

            if (exchangeData.currExchangeGive && inputData < exchangeData.currExchangeGive.min) {
                addInputClass('.converter__container-give-min')
            }

            if (exchangeData.currExchangeGive && inputData > exchangeData.currExchangeGive.max) {
                addInputClass('.converter__container-give-max')
            }

            exchangeData.currExchangeGiveAmount = 0
            culculateGet()
        }
    })
}
handleGiveInput()
//TODO:(e.preventDefault)
// FORM Event Listener (get EMAIL and Wallet)
const collectUserData = () => {
    const btn = document.getElementById('submitButton')
    const email = document.getElementById('formEmail')
    const wallet = document.getElementById('formWallet')

    btn.addEventListener('click', (e) => {
        e.preventDefault();

        exchangeData.customerData.email = email.value
        exchangeData.customerData.wallet = wallet.value
        exchangeData.exchangeNumber = generateOrderNumber()
        sendToLocalStorage("exchangeData", exchangeData);
        startExchange()
    })
}
collectUserData()

/////////////////ПОГОДЖЕННЯ З УМОВАМИ І ПРАВИЛАМИ  ................

const email = document.getElementById('formEmail') 
const wallet = document.getElementById('formWallet') 
 
email.addEventListener("input", () => isInputValid("formEmail")) 
wallet.addEventListener("input", () => isInputValid("formWallet"))


function validateEmail(email) {
    const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(email);
}

function isInputValid(selector) {
    let result = true
    const node = document.getElementById(selector);

    if (selector === "formEmail") {
        if (node.value && validateEmail(node.value)) {
            node.dataset.submitEmailValid = "true"
        } else {
            node.dataset.submitEmailValid = "false"
            result = false
            clearCheckbox(checkbox)
            disableSubmitButton(submitButton)
        }
    }

    if (selector === "formWallet") {
        if (node.value && node.value.length > 10) {
            node.dataset.submitWalletValid = "true"
        } else {
            node.dataset.submitWalletValid = "false"
            result = false
            clearCheckbox(checkbox)
            disableSubmitButton(submitButton)
        }
    }

    return result
}

function checkboxAndSubmitBtnValidation() {
    if (exchangeData.currCalculation <= 0) {
        checkbox.dataset.submitBtnCheked = "false"
        clearCheckbox(checkbox)
        return
    } else {
        checkbox.dataset.submitBtnCheked = "true"
        submitButton.disabled = !checkbox.checked;
    }
}

checkbox.addEventListener('change', () => {
    if (isInputValid("formEmail") && isInputValid("formWallet")) {
        checkboxAndSubmitBtnValidation()
    }
});

////////Відправка на сторінку оплати
function startExchange() {
    window.open('./payment.html', "_self");
}

function sendToLocalStorage(key, data) {
    window.localStorage.setItem(key, JSON.stringify(data));
}

// --- Currency ---
function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}
function getRandomDateInRange(days) {
    const newDate = Date.now()
    const dayInterval = 1000 * 60 * 60 * 24;
    const daysCount = (dayInterval * days) - 6000
    const newRandomDate = randomNumber(0, daysCount)


    const rndDay = new Date(newDate - newRandomDate)
    const year = rndDay.getFullYear()
    let mon = rndDay.getMonth() + 1
    let day = rndDay.getUTCDate()

    function addZero(num) {
        if (num === 0) {
            return `01`
        }
        if (num <= 9) {
            return `0${num}`
        }
        return num
    }

    const str = `${addZero(day)}.${addZero(mon)}.${year}`
    return str
}

function createResentCurrExchangeElement(selector) {
    const data = defaultExchangeItemsArray;

    const item1 = data[Math.floor(randomNumber(0, data.length - 1))];
    const item2 = data[Math.floor(randomNumber(0, data.length - 1))];

    const node = document.querySelector(`.${selector}`);
    const currOne = item1.shortName;
    const currOneImgName = item1.imgName;

    const currTwo = item2.shortName;
    const currTwoImgName = item2.imgName;

    const newDate = getRandomDateInRange(3)
    let volume = randomNumber(1, 100000).toFixed(2)

    if (currOne === 'BTC') {
        volume = Math.random().toFixed(4)
    }

    const div = document.createElement('div')
    div.classList.add(`${selector}-item`)
    div.innerHTML = `
                <div class="currency__container-left-number">${volume}</div>
                <div class="currency__container-left-currency">${currOne}</div>
                <div class="currency__container-left-icon">
                    <img src="./Image/${currOneImgName}.png" alt="">
                </div>
                <div class="currency__container-left-arrow">
                    <img src="./Icon/icon-arrow-right.png" alt="arrow-right">
                </div>
          
           
            <div class="currency__container-left-currency">${currTwo}</div>
            <div class="currency__container-left-icon">
                <img src="./Image/${currTwoImgName}.png">
            </div>
            <div class="currency__container-left-clock">
                <img src="./Icon/ibppl___копія__3_-removebg-preview.png" alt="clock-time">
            </div>
            <div class="currency__container-left-date">${newDate}</div>
            
        `
    node.appendChild(div)
}
function createHtmlElement(selector, iterator) {
    for (let i = 0; i < iterator; i++) {
        createResentCurrExchangeElement(selector)
    }
}
createHtmlElement('currency__container-left', 4)
createHtmlElement('currency__container-right', 4)

langChangeMain();