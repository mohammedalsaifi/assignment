
// "Task-1" Here is a function that calculate the both sum and avarage

// initially creating function and pass a assign a parameter
function calculateSumAndAverage(numbers) {
    // here a condition to ensure that array is not empty and if its return sum and average equal 0
    if (numbers.length === 0) {
        return { sum: 0, avrg: 0 };
    }

    // here reduce will sum the all previous elements in array with the next one 
    const sum = numbers.reduce((acc, num) => acc + num, 0);

    // regular calculation which devide the sum on array length
    const avrg = sum / numbers.length;

    return { sum, avrg };
}

// Usage of function

// declare array number
const numbers = [10, 20, 30, 40];

// use the function and pass the array name as excpected argument
const result = calculateSumAndAverage(numbers);

// print result on console log
console.log(`Sum: ${result.sum}, Average: ${result.avrg}`);

//=================================== Task-3 return unique string only ===================================

function removeDuplicates(strings) {
    const uniqueArray = []; // New array to track unique values

    return strings.filter((item) => {

        // Check if the item is already in the unique array
        if (!uniqueArray.includes(item)) {

            // Add it to the unique array
            uniqueArray.push(item);

            // Keep the item in the result
            return true;
        }

        // Exclude duplicates
        return false;
    });
}

// Example usage
const strings = ["mohammed", "othman", "sameh", "mohammed", "othman", "ahmed"];
const uniqueStrings = removeDuplicates(strings);
console.log(uniqueStrings);
