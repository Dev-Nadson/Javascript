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
const prompt = require("prompt-sync")();

const str = prompt("");
console.log(XO(str));