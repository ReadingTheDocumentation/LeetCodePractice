//https://leetcode.com/problems/two-sum/

//correct answer! 
//New Solution -- check and store
var twoSum = function (nums, target){
    //create storage object
    const storage = {}
    //iterate through the array
    for (let i = 0; i < nums.length; i++){
        //subtract each array value from target
        let difference = target - nums[i]
        //if difference is a key in storage object
        if (storage[difference] !== undefined){
            //return value from obj and current index
            return [storage[difference], i]
            //else store the array the value/key in the object
        } else storage[nums[i]] = i
    
    }

}


console.log(twoSum([2, 7, 11, 15], 9))
console.log(twoSum([3, 3], 6))







//Solution Does not work -- if the nums array contains duplicate numbers
//it fails because you can't have duplicate key in object.


// var twoSum = function (nums, target) {
//     let obj = {}
//     for (let i = 0; i < nums.length; i++) {
//         obj[nums[i]] = i
//     }
//     const searchArr = Object.keys(obj).map(el => Number(el)).sort((a, b) => a - b)
//     let start = 0
//     for (let i = searchArr.length - 1; i > start; i--) {
 
//         if (searchArr[start] + searchArr[i] < target) {
//             start++

//         }
//         if (searchArr[start] + searchArr[i] === target) {
//             return [obj[searchArr[start]], obj[searchArr[i]]]

//         }
//     }


// };

 // Does not work need to try problem from a different angle. 



