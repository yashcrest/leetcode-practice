// You must write an algorithm that runs in O(n) time and without using the division operation.

// we need to solve this by using a prefix array which would calculate the product of every item before the currect item, and postfix array which would calculate the product of every item after the current item. And at last multiple those two arrays to get the result.

function productofArrayExceptSelf(nums) {
  let res = new Array(nums.length).fill(1);
  prefix = 1;
  postfix = 1;
  for (let i = 0; i < nums.length; i++) {
    res[i] = prefix;
    prefix *= nums[i];
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    res[i] *= postfix;
    postfix *= nums[i];
  }
  return res;
}

let nums = [1, 2, 3, 4];
console.log(productofArrayExceptSelf(nums));
