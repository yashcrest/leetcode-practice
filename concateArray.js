/* 
Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

Specifically, ans is the concatenation of two nums arrays.

Return the array ans.

Input: nums = [1,3,2,1]
Output: [1,3,2,1,1,3,2,1]
Explanation: The array ans is formed as follows:
- ans = [nums[0],nums[1],nums[2],nums[3],nums[0],nums[1],nums[2],nums[3]]
- ans = [1,3,2,1,1,3,2,1]

Input: nums = [1,2,1]
Output: [1,2,1,1,2,1]
Explanation: The array ans is formed as follows:
- ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]
- ans = [1,2,1,1,2,1]
*/

function getConcatenation(nums) {
  let newArray = [];
  for (let i = 0; i < nums.length; i++) {
    newArray[i] = nums[i];
    newArray[i + nums.length] = nums[i]; // this is the tricky part
  }
  return newArray;
}
console.log(getConcatenation([1, 2, 3]));

//alt solution using spread operator
function concateArray(arr) {
  return [...arr, ...arr];
}
console.log(concateArray([2, 3, 4]));
