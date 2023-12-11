const filterExchangeTabs = (arr, selector, entry) => {
    return arr.filter(item => item[selector] === entry)
}

export default filterExchangeTabs