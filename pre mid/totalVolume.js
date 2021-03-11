function totalVolume(input) {
    total = 0, sum = 0
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < 1; j++) {
            sum = input[i][j] * input[i][j + 1] * input[i][j + 2]

        }
        total += sum

    }
    return total
}

console.log(totalVolume([[4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]]))
console.log(totalVolume([[2, 2, 2], [2, 1, 1]]))
console.log(totalVolume([[1, 1, 1]]))