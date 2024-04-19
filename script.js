function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

function calculateSum(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum;
}

function countOddNumbers(arr) {
    let count = 0;
    for (let num of arr) {
        if (num % 2 !== 0) {
            count++;
        }
    }
    return count;
}

const dummyArray = [3, 7, 2, 8, 5, 9, 4, 6, 1];

console.log("Array:", dummyArray);
console.log("Maximum number:", findMax(dummyArray));
console.log("Sum of all elements:", calculateSum(dummyArray));
console.log("Number of odd numbers:", countOddNumbers(dummyArray));
