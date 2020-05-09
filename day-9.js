// Question: Valid Perfect Square

var isPerfectSquare = function (num) {
    let i = 1;
    while (num > 0) {
        num -= i;
        if (num === 0) return true;
        i += 2;
    }

    return false;
};