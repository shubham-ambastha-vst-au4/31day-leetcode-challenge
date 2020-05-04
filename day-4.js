// Question: Number Complement

var findComplement = function (num) {
    let bin = (num).toString(2).split("")
    for (let i = 0; i < bin.length; i++) {
        if (bin[i] == 1) {
            bin[i] = "0"
        } else {
            bin[i] = "1"
        }
    }
    let dec = bin.join("")
    return parseInt(dec, 2)
};