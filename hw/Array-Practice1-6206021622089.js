let v1 = ['Apple', 1, 3]
let v2 = ['Frise', 2, true]
let v3 = ['Mars', "s", false]
let a = []
let x = v1.length
for (let i = 0; i < x; i++) {
    if (typeof v1[i] === typeof v2[i] && typeof v1[i] === typeof v3[i]) {
        a[i] = true
    } else { a[i] = false }
}
console.log(a)