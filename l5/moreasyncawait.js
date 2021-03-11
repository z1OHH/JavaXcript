function who(){
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve("x")
        }, 200);
    });
}

function what(){
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve("lurks");
        }, 300);
    });
}

function where(){
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve("in the shadows");
        }, 500);
    });
}

async function msg(){
    const a = await who();
    const a = await what();
    const a = await where();

    console.log(`${a} ${b} ${c}`);
}

console.log('We are looking for:')
msg();
console.log('Hello')