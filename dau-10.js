// Question: Find the town judge

var findJudge = function (N, trust) {
    if (!trust.length) return 1
    let judge = -1
    let citizen = []
    let myMap = new Map();
    for (let i = 0; i < trust.length; i++) {
        let trailJudge = trust[i][1]
        citizen.push(trust[i][0])
        let val = 1
        if (myMap.has(trailJudge)) {
            val = myMap.get(trailJudge)
            val++
        }
        myMap.set(trailJudge, val)
    }
    myMap.forEach((v, k) => {
        if (v >= (N - 1)) {
            judge = k
        }
    });
    if (citizen.indexOf(judge) !== -1) return -1
    return judge;
};