//https://leetcode.com/problems/longest-substring-without-repeating-characters/

// Given a string s, find the length of the longest substring 
//without repeating characters.

//Example:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// switching gears to use an array with a sliding window.
var lengthOfLongestSubstring = function(s) {
    // create empty array to store sequences
    let currentSeq = []
    //create storage to hold longest sequence
    let longestSeq = 0
// debugger;
    //iterate through the string
    for (let i = 0; i < s.length; i++){
        //create a var that determines if current string index exists in the array
       let currentIndex = currentSeq.indexOf(s[i])
       //if current Index is not -1 then set currentSeq = value of longer length
       if (currentIndex != -1){
           longestSeq = Math.max(longestSeq, currentSeq.length)
       //slice out all values up to the index
           currentSeq.splice(0, currentIndex + 1)

       } 

       currentSeq.push(s[i])

    }

return Math.max(longestSeq, currentSeq.length)
    

};


// console.log(lengthOfLongestSubstring("dvdf"))





//Below doesn't work because it doesn't slide - it bins the whole series
//every time it finds a duplicate rather than wiping out the first one in only. 
//I think I can fix this, but I'm going to create a new version above so I 
//have a record of this failure. 


// var lengthOfLongestSubstring = function(s) {

//     //create a count variable to store length of substring
//     let count = 0
//     //create a storage set
//     storage = new Set
//     //iterate through the string
//     for (let i = 0; i < s.length; i++){
//         //check if value exists if not, add to set
       
//         if (!storage.has(s[i])){
//             storage.add(s[i])
//         } else {
//             //else if count < set size then set count to size
//             if (count < storage.size){
//                 count = storage.size
//             }
//             //empty storage
//             storage.clear()
//             storage.add(s[i])
//         }
        
//     }

//     if (storage.size > count){
//         return storage.size
//     } return count

    

// };


// console.log(lengthOfLongestSubstring(' '))

//currently stuck on why we can't get space to work -- need to do more set research tomorrow.
