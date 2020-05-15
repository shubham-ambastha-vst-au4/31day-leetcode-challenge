// Question: Maximum Sum Circular Subarray

var maxSubarraySumCircular = function (A) {
    let arr = kandaneAlgo(A);
    for (let i = 0; i < A.length; i++) {
        A[i] = -A[i];
    }

    let negativeArr = kandaneAlgo(A);
    let sum = 0;

    for (let i = 0; i < A.length; i++) {
        A[i] = -A[i];
        sum += A[i];
    }

    if (sum + negativeArr !== 0) {
        return Math.max(arr, sum + negativeArr)
    } else {
        return arr;
    }
};

var kandaneAlgo = function (A) {
    let maxNum = A[0];
    let localMaximum = A[0];

    for (let i = 1; i < A.length; i++) {
        localMaximum = Math.max(A[i], A[i] + localMaximum);
        maxNum = Math.max(localMaximum, maxNum);
    }
    return maxNum;
}