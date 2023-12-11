function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}
const generateOrderNumber = (length) => {
    let digitsNumber;
    const baseNumber = '12'
    if(!length) {
        digitsNumber = 5
    } else (
        digitsNumber = length - baseNumber.length
    )
    let result = baseNumber

    for(let i = 1; i <= digitsNumber; i++) {
        result += Math.floor(randomNumber(0,9))
    }
    return result *1
}

export default generateOrderNumber