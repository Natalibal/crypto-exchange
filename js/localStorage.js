const sendToLocalStorage = (key, data) => {
    window.localStorage.setItem(key, JSON.stringify(data));
}

const getObjectFromLocalStorage = (key) => {
    const newObject = window.localStorage.getItem(key);
    return JSON.parse(newObject)
}

const checkLocalStorageItem = (key) => {
    return (!!localStorage.getItem(key))
}

export {
    sendToLocalStorage,
    getObjectFromLocalStorage,
    checkLocalStorageItem
}