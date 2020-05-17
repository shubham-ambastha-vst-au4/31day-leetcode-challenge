//Questions: Find All Anagrams in a String

var findAnagrams = function (s, p) {
    let pChar = getCharArr(p)
    let res = [], window = getCharArr(s.substring(0, p.length)), len = s.length - p.length + 1
    if (isEqual(pChar, window)) {
        res.push(0)
    }
    for (let i = 1; i < len; i++) {
        slideWindow(window, s[i - 1], s[i + p.length - 1])
        if (isEqual(pChar, window)) {
            res.push(i)
        }
    }
    return res
};

function getCharArr(str) {
    let charArr = Array(26).fill(0)
    for (let i = 0; i < str.length; i++) {
        let code = str.charCodeAt(i)
        charArr[code - 97] = charArr[code - 97] + 1
    }
    return charArr
}

function isEqual(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false
        }
    }
    return true
}

function slideWindow(arr, left, right) {
    arr[left.charCodeAt(0) - 97] -= 1
    arr[right.charCodeAt(0) - 97] += 1
}