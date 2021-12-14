https://leetcode.com/problems/longest-substring-without-repeating-characters/

// Given a string s, find the length of the longest substring 
//without repeating characters.

//Example:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

var lengthOfLongestSubstring = function(s) {
debugger;
    //create a count variable to store length of substring
    let count = 0
    //create a storage set
    storage = new Set
    //iterate through the string
    for (let i = 0; i < s.length; i++){
        //check if value exists if not, add to set
        if (!storage.has(s[i])){
            storage.add(s[i])
        } else {
            //else if count < set size then set count to size
            if (count < storage.size){
                count = storage.size
            }
            //empty storage
            storage.clear()
            storage.add(s[i])
        }
    }

    return count

};


console.log(lengthOfLongestSubstring(' '))

//currently stuck on why we can't get space to work -- need to do more set research tomorrow.
