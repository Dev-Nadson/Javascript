function makePassword(length) {
    let pass = Math.random().toString(10).substring(2, 2 + length)
    return pass
}

console.log(makePassword(10))