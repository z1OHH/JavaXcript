let ob = ['Table', 'Chairs', 'Couch'];
for (let i = 0; i < ob.length; i++) {
    let iterator = ob[i][Symbol.iterator]();
    while (true) {
        let r = iterator.next();
        if (r.done) break;
        console.log(r.value);
    }
}