let numbers = [2,7,11,15]
let target = 9

var twoSum = function (nums, target) {
    let lp = 0
    let rp = nums.length -1 
    while(lp < rp) {
        let sum = nums[lp] + nums[rp]
        if(sum === target) {
            return [lp + 1, rp + 1];
        } else if (sum < target) {
            lp ++ ;
        } else {
            rp -- ; 
        }
    }
}


console.log(twoSum(numbers, target));