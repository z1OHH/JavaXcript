function removeDups(input) {
    return Array.from(new Set(input))
}
console.log(removeDups([1, 0, 1, 0]))
console.log(removeDups(["The", "big", "cat"]))
console.log(removeDups(["John", "Taylor", "John"]))

//*More tips and solutions
//https://medium.com/@22Wickets/code-edabit-remove-duplicates-8aa5ec9d830a
//https://levelup.gitconnected.com/7-ways-to-remove-duplicates-from-array-in-javascript-cea4144caf31