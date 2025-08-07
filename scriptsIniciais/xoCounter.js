function XO(str) {
    const xo = str.toLowerCase().split("")
    let countx = 0
    let county = 0

    for (let char of xo) {
        if (char === 'x') countx++
        if (char === "o") county++
    }
    if (countx == county) {
        console.log(str + " => True")
    } else {
        console.log(str + " => False")
    }
}

XO("xxxooo")
