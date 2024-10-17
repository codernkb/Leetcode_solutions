/**
 * Increments a given array of digits representing a number by one.
 * @param {number[]} digits - The array of digits representing the number.
 * @returns {number[]} The incremented array of digits.
 */
var plusOne = function(digits) {
    // Start from the end of the array and move towards the front.
    for (let i = digits.length - 1; i >= 0; i--) {
        // If the current digit is not 9, simply increment it by 1.
        if (digits[i] + 1 !== 10) {
            digits[i] += 1;
            // Return the incremented array of digits.
            return digits;
        }
        // If the current digit is 9, set it to 0 and move to the next digit.
        digits[i] = 0;
        // If we have reached the front of the array, add a new digit at the front with value 1.
        if (i === 0) {
            digits.unshift(1);
            // Return the incremented array of digits.
            return digits;
        }
    }    
};
