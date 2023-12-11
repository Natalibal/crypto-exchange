const resetExchangeData = (data) => {
    data.currExchangeGive = undefined;
    data.currExchangeGiveAmount = 0
    data.currExchangeGet = undefined
    data.currCalculation = undefined
    data.customerData = {
        id: undefined,
        name: '',
        email: '',
        wallet: undefined,
    }
    data.exchangeNumber = undefined
}
export default resetExchangeData