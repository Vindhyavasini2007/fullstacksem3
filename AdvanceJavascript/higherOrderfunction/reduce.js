let nums = [1, 2, 3, 4];
let total = nums.reduce((sum, nums) =>{
    return sum+nums;
} ,0);
console.log(total);
