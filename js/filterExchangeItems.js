const filterExchangeItems = (arr, entry) => {
    const searchText = entry.toLowerCase()
    return arr.filter(item => item.name.toLowerCase().includes(searchText))
}

export default filterExchangeItems