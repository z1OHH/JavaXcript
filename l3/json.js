// Object format
const book = {
    title: "1984",
    author: "George Orwell",
    isAvailable: false
};
// Converted to JSON
const bookJSON = JSON.stringify(book);
console.log(bookJSON)
let Obook = JSON.parse(bookJSON);
console.log(Obook.title);