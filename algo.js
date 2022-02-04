// Algo1: Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise.

const arr = [1,2,5,2,3,-4]

const addToZero = arr =>{
    if(arr.length === 0){
        return false;
    }

    for(let i = 0; i<arr.length; i++){
        for(let j = 0; j<arr.length; j++){
            if(arr[i] + arr[j] === 0){
                return true
            }
        }
    }
    return false;
}
console.log(addToZero(arr))

/* Runtime Complexity: O(n^2)  && Space Complexity: O(n^2) */


// Algo2: Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.

let input = "moonday";

function hasUniqueChars(word)
{
    for(let i = 0; i < word.length; i++)
        for(let j = i + 1; j < word.length; j++)
            if (word[i] == word[j])
                return false;
 
    // If no duplicate characters
    // encountered, return true
    return true;
}
console.log(hasUniqueChars(input))

/* Runtime Complexity: O(n^2)  && Space Complexity: O(n^2) */


// Algo3: A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.” Write a function to check a sentence to see if it is a pangram or not.

function detectPangram(str){
    const newStr = str.toLowerCase().replace(/[^A-Za-z]/g, '')
    const set = new Set()
    for(let i = 0; i < newStr.length; i++){
        set.add(newStr[i])
    }

    if(set.size === 26){
        return true
    } else {
        return false
    }
}

console.log(detectPangram("The quick brown fox jumps over the lazy dog!"));

/* Runtime Complexity: O(n^2)  && Space Complexity: O(n^2) */
