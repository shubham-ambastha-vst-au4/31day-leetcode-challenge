//Question : Permutation in string

var checkInclusion = function (s1, s2) {
    var map = new Array(128).fill(0)
    for (var i = 0; i < s1.length; i++) {
        map[s1.charCodeAt(i)] -= 1
    }
    var count = 0

    var lo = 0
    var hi = 0
    while (hi < s2.length) {
        var cHi = s2.charCodeAt(hi)
        if (map[cHi] === 0) { count = 1 }
        map[cHi] += 1
        hi += 1

        while (count === 1) {
            var cLo = s2.charCodeAt(lo)
            if (map[cLo] === 1) { count = 0 }
            map[cLo] -= 1
            lo += 1
        }

        if (hi - lo === s1.length) {
            console.log(lo, hi)
            return true
        }
    }
    return false
};