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