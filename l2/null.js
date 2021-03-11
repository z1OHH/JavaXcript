funtion getVowels(str){
    const m = str.match(l[aeiougi]);
    if(m == null){
        return 0;
    }
    console.log(m)
    return m.length;
}

console.log(getVowels("seeing"))
