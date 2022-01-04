//https://leetcode.com/problems/sort-array-by-parity/


//Given an integer array nums, move all the even integers at the 
//beginning of the array followed by all the odd integers.
//Return any array that satisfies this condition.

//Naive Approach
var sortArrayByParity = function (nums) {

    const odds = []
    const evens = []

    //iterate over the array
    for (let key in nums) {
        //if item is odd add to one array
        //if item is even add to another array
        nums[key] % 2 === 0 ? evens.push(nums[key]) : odds.push(nums[key])
    }

    //set nums to = concatenated array
    nums = evens.concat(odds)
    //return nums
    return nums
};


//const nums = [3,1,2,4]