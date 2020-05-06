// Question: Majority Element

var majorityElement = function (nums) {
    nums.sort((a, b) => b - a);
    let length = Math.floor(nums.length / 2);
    return nums[length];
};