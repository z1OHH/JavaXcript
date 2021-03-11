function numberSplit(num) {
    var n = []
    var sum = Math.floor(num/2)
    var sum2 = num - sum
    n.push(sum)
    n.push(sum2)
    return n
}
console.log(numberSplit(4))
console.log(numberSplit(10))
console.log(numberSplit(11))
console.log(numberSplit(-9))