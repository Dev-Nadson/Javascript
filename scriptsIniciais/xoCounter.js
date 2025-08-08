function XO(str) {
    const xo = str.toLowerCase().split("")
    let countx = 0
    let county = 0

    for (let char of xo) {
        if (char === 'x') countx++
        if (char === "o") county++
    }
    if (countx == county) {
        return true
    } else {
        return false
    }
}
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("", (name) => {
    console.log(XO(name))
    rl.close()
});
