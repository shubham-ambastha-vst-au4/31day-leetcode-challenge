// Question: Remove Kth digits

var removeKdigits = function (num, k) {
    if (num.length === k) return "0";
    const stack = [];
    let removed = 0;
    for (let n of num) {
        while (stack.length && n < stack[stack.length - 1] && removed < k) {
            stack.pop();
            removed += 1;
        }
        stack.push(n);
    }
    while (removed < k) {
        stack.pop();
        removed += 1;
    }
    while (stack.length > 1 && stack[0] === '0') {
        stack.shift();
    }
    let result = stack.join("")
    return result;
};