//First approach
var canConstruct = function (ransomNote, magazine) {
    let noteLen = ransomNote.length;
    let magLen = magazine.length;

    if (noteLen > magLen) return false;
    for (let i = 0; i < noteLen; i++) {
        let update = 0
        if (update > 1) return false;
        let indx = magazine.indexOf(ransomNote[i])
        if (indx !== -1) {
            magazine = magazine.replace(magazine[indx], '')
            update++;
        } else {
            return false
        }
    }
    return true
}

// Second Approach
var canConstruct = function (ransomNote, magazine) {
    let chars = ransomNote.split('');
    let magChars = magazine.split('');

    for (let i = 0; i < ransomNote.length; i++) {
        if (magChars.includes(chars[i])) magChars[magChars.indexOf(chars[i])] = '';
        else return false;
    }

    return true;
};