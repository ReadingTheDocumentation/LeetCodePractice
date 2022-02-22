//https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/


//  Best Time to Buy and Sell Stock II
// https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/564/

let prices = [7, 1, 5, 3, 6, 4]

var maxProfit = function (prices) {
    //edge case if array length less than or equal to 1 return 0
    if (prices.length <= 1) return 0
    //create varible to hold current profit
    let profit = 0;
    //iterate through the array
    for (i = 0; i < prices.length - 1; i++) {
        // if i < i+ then add difference to profit
        if (prices[i] < prices[i + 1]) {
            profit += prices[i + 1] - prices[i]
        }
    }
    return profit
};





//  Remove Duplicates from Sorted Array
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/727/


let nums = [1, 1, 2]

let nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]

var removeDuplicates = function (nums) {

    //create search at first index of array
    let search = 0
    //iterate through array starting at postion 1
    for (let i = 1; i < nums.length; i++) {
        //if index === 'n' break
        if (nums[i] === 'n') {
            console.log(nums)
            return i
        }
        //compare search to first index
        if (nums[search] === nums[i]) {
            //if match slice item of the array and push 'n' to the end
            nums.splice(i, 1)
            nums.push('n')
            //move i back to account for sliced item
            i--

        } else {
            //if no match increment search
            search++
        }

    }
    //if the above conditions do not trigger, return length of array.
    return nums.length

};


//Rotate Array
//https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/646/

//Given an array, rotate the array to the right by k steps, where k is non-negative.



var rotateV1 = function (nums, k) {
    //create position variable for start/end slice method
    let positionK = nums.length - (k)
    //create an array with the last k items
    let beginning = nums.slice(positionK)
    //create an array with items preceding k.
    let end = nums.slice(0, positionK)
    //concat arrays
    return beginning.concat(end)

};

//above version does not work in Leetcode but works in the console -- I think the question wants
//the input array to be mutated

//new version uses pop and unshift in a loop

var rotateV2 = function (nums, k) {
    //get rotate start position
    let end = nums.length - (k + 1)
    //iterate over array from back to end
    for (let i = nums.length - 1; i > end; i--) {
        //unshift last item
        nums.unshift(nums[nums.length - 1])
        //remove last item
        nums.pop()
    }
    return nums

};

//above code exceeds the time limit for the test
//we can use unshift with the spread operator on but that's a tomorrow problem we've exceed todays time limit.
// best of both worlds in version three - this however fails when using an array that shorter in length than k


var rotateV3 = function (nums, k) {

    if (k === 0) { return nums }

    if (k >= 2 && nums.length >= 2) {
        let positionK = nums.length - (k)
        let beginning = nums.slice(positionK)
        nums.splice(positionK, nums.length)
        nums.unshift(...beginning)
    } else {
        nums.reverse()
    }
    return nums
}



let rotateArray = [1, 2, 3, 4, 5, 6, 7, 8]
var rotateV3 = function (nums, k) {
    if (k > nums.length || k < 0) return null
    //reverse array
    nums.reverse()
    //create helper function to reverse end subsection of the array
    subArrayReverse(k - 1, nums.length - 1, nums)
    subArrayReverse(0, k, nums)
    //return array    
    return nums

}



//takes array, start and stop as arguments
function subArrayReverse(sIndex, eIndex, array) {

    for (let i = sIndex; i < eIndex; i++) {
        //if difference between start and stop is 1
        //break
        if (eIndex - sIndex === 1) break;

        //reverse start and end of array
        let start = array[eIndex]
        let end = array[i]
        array[i] = start
        array[eIndex] = end
        //decrement end index
        eIndex--
    }
    //return at end of function
    return

}