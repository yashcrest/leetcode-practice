/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example 1:
Input: nums = [1,2,3,1]
Output: true

Example 2:
Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
*/

// try to solve this with C or C++

function containsDuplicate(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; arr.length; j++) {
      if (arr[i] === arr[j]) {
        return true;
      }
    }
  }
  return false;
}

console.log(containsDuplicate([1, 2, 2, 1, 2]));

//another approach using built in "set" method
function checkDuplicate(nums) {
  let newArr = new Set(nums);
  if (newArr.size !== nums.length) {
    // to find out
    return true;
  } else {
    return false;
  }
}

console.log(checkDuplicate([1, 3, 4, 2, 1]));
