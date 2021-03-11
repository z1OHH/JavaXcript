function capToFront(s) {
    const result = [...(s)].sort(l => /[A-Z]/.test(l) ? -1 : 0).join('');
    return result
}
console.log(capToFront("hApPy"))
console.log(capToFront("moveMENT"))
console.log(capToFront("shOrtCAKE"))