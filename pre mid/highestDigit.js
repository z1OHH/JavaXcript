function highestDigit(num) {
    fMax = num.toString().split('').sort().reverse()
    console.log(fMax)
    return parseInt(fMax)
}
console.log(highestDigit(379))
console.log(highestDigit(2))
console.log(highestDigit(377401))