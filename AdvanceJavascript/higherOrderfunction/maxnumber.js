let nums = [1, 2, 3, 4];
let total = nums.reduce((max, nums) =>{
    return nums>max? nums:max;
} ,nums[0]);
console.log(total);
