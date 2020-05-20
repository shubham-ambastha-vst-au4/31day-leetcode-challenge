//Question: Online stock span

var StockSpanner = function () {
    this.index = -1;
    this.stack = [];
};

StockSpanner.prototype.next = function (price) {
    this.index++;
    let currInx = this.index;
    let stackObj = { index: currInx, value: price }
    while (this.stack.length && this.stack[this.stack.length - 1].value <= price) {
        this.stack.pop();
    }
    if (!this.stack.length) {
        this.stack.push(stackObj)
        return this.index + 1
    }
    let result = this.stack[this.stack.length - 1].index;
    this.stack.push(stackObj)
    return currInx - result
};