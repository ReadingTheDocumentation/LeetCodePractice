
//https://leetcode.com/problems/longest-palindromic-substring/



// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.

// Input: s = "bdabaddfresd"
// Output: "dabad"

// Input: s = "cbbd"
// Output: "bb"


//third plan -- after watching video on solution
// variable that stores longest palindrome
//create sub array with slice
// if array even 
//left = sliced array.length / 2 -1 
//right = sliced array.length / 2
//if array is odd
//left = sliced array length -1) /2
//right = sliced array length + 1/2

//create subcount for array 
//while left >=0 && right <= .length




//two functions - 1 function checks palindrome
// function takes in start index, and array to check
//create subrange using slice


//while left - right != passed value




//second function iterates through palindrome call function on each indices



//second idea -- this idea will not work
//create count variable
//set start to string[0]
//iterate through string starting at index of i
//log indexes of each letter match to seperate array
// slice array and check that each letter has an occurance of 2
// iterate occurance of 2 array to ensure it's a palindrom 


// first idea - doesn't work be cause it misses palindromes that are not on center
    //start at each end
    //check for outside match
    //check inside match
    //slice result.length add to largest variable

var longestPalindrome = function(s) {






    
};