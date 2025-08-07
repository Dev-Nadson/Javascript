function XO(str) {
    const xo = str.toLowerCase().split("")
    let countx = 0
    let county = 0

    for (let char of xo) {
        if (char === 'x') countx++
        if (char === "o") county++
    }
    if (countx == county) {
        return (str + " => True")
    } else {
        return (str + " => False")
    }
}

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question(function (str) {
    console.log(XO(str))
    rl.close();
});