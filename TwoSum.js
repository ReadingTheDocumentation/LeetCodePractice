
//Solution Does not work -- if the nums array contains duplicate numbers
//it fails because you can't have duplicate key in object.
//https://leetcode.com/problems/two-sum/

var twoSum = function (nums, target) {
    let obj = {}
    for (let i = 0; i < nums.length; i++) {
        obj[nums[i]] = i
    }
    const searchArr = Object.keys(obj).map(el => Number(el)).sort((a, b) => a - b)
    let start = 0
    for (let i = searchArr.length - 1; i > start; i--) {
        console.log(i)
        if (searchArr[start] + searchArr[i] < target) {
            start++

        }
        if (searchArr[start] + searchArr[i] === target) {
            return [obj[searchArr[start]], obj[searchArr[i]]]

        }
    }


};

twoSum([2, 7, 11, 15], 9)
twoSum([3, 3], 6) // Does not work need to try problem from a different angle. 


