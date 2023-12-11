const createExchangeItemLi = (obj) => {
    const { name, imgName } = obj;

    const li = document.createElement('li');
    li.classList.add('currencyItemElement')
    li.dataset.type = "currencyItem";
    li.dataset.exchangeName = `${name}`;
    li.style.cssText += "cursor: pointer; display: flex;";

    li.innerHTML = `
            <img src="./Image/${imgName}.png" alt=${name} data-type='currencyItem' class='currencyItemImage'>
            <p data-type='currencyItem' style="padding: 11px 0px; margin: 10px 0px;">${name}</p>
        `;
    return li
}

const createExchangeItemList = (arr, node) => {
    node.innerHTML = ''

    if(!arr.length) {
        const li = document.createElement('li');
        li.innerHTML = `<p>'No currencies'</p>`
        node.appendChild(li)
        return
    }

    for(const item in arr) {
        node.appendChild(createExchangeItemLi(arr[item]))
    }
}

export default createExchangeItemList