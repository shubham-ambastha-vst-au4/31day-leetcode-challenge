// First Unique Character in a String

var firstUniqChar = function (s) {
    let map = new Map();

    for (let char of s) {
        map.set(char, map.get(char) + 1 || 1);
    }

    for (let i = 0; i < s.length; i++) {
        if (map.get(s[i]) === 1) return i;
    }
    return -1;

};