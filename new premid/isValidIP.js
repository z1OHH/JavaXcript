function isValidIP(ipaddress) {
    if (/^(25[0-5]|2[0-4][0-9]|[1]?[1-9][1-9]?)\.(25[0-5]|2[0-4][0-9]|[1]?[1-9][1-9]?)\.(25[0-5]|2[0-4][0-9]|[1]?[1-9][1-9]?)\.(25[0-5]|2[0-4][0-9]|[1]?[1-9][1-9]?)$/.test(ipaddress)) {
        return (true)
    }
    return (false)
}
console.log(isValidIP("1.2.3.4"))
console.log(isValidIP("1.2.3"))
console.log(isValidIP("1.2.3.4.5"))
console.log(isValidIP("123.45.67.89"))
console.log(isValidIP("123.456.78.90"))
console.log(isValidIP("123.045.067.089"))
console.log(isValidIP("9.9.9.9"))

/*Tips from
https://stackoverflow.com/questions/4460586/javascript-regular-expression-to-check-for-ip-addresses/26445549
*/
