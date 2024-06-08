const symbolsToEscape = ["\\", ".", "^", "$", "*", "+", "?", "(", ")", "[", "]", "{", "}", "|"]

const generateRegExp = (regExp:string) => regExp.split("")
    .map((item) => {
        if (symbolsToEscape.includes(item)) return "\\" + item;
        return item
    }).join("")
    .replaceAll("X", "\\d{1}")
    .replaceAll(" ", "\\s") + "$"

const validPhoneToBool = (regExp:string, numStr:string) => {
    const matchingForm = generateRegExp(regExp)
    const gigaReg = new RegExp(matchingForm)

    console.log(matchingForm)
    return gigaReg.test(numStr)
}

const validPhoneToStr = (regExp:string, numStr:string) => {
    const matchingForm = generateRegExp(regExp.slice(0, numStr.length))
    const gigaReg = new RegExp(matchingForm)

    return gigaReg.test(numStr) ? numStr : numStr.slice(0, numStr.length - 1)
}

module.exports = { validPhoneToBool, validPhoneToStr }