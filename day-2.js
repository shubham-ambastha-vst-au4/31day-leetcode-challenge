// Question: Jewels and Stones

var numJewelsInStones = function (J, S) {
    let count = 0;
    for (let i = 0; i < S.length; i++) {
        let currStr = S[i]
        if (J.indexOf(currStr) !== -1) {
            count++
        }
    }
    return count
};