let nums = [1, 2, 3, 4, 5, 6];

function twoSum(nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      res = map.get(target - nums[i]);
      return [res, i];
    } else {
      map.set(nums[i], i);
    }
  }
  return []; // if the solution not present, return an empty nums.
}

console.log(twoSum(nums, 3));
