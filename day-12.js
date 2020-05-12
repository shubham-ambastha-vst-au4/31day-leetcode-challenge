// Question: Single element in a sorted array

var singleNonDuplicate = function (nums) {
    let i = 0;
    while (i < nums.length) {
        if (nums[i] !== nums[i + 1]) return nums[i];
        i += 2;
    }
};

// Method 2:var singleNonDuplicate = function(nums) {
let left = 0
let right = nums.length

while (left <= right) {
    let middle = Math.floor((left + right) / 2)

    if (nums[middle + 1] === nums[middle]) {
        if (middle % 2 === 0) {
            left = middle + 1
        }
        else {
            right = middle
        }
    }
    else if (nums[middle - 1] === nums[middle]) {
        if (middle % 2 === 0) {
            right = middle
        }
        else {
            left = middle + 1
        }
    }
    else {
        return nums[middle]
    }
}