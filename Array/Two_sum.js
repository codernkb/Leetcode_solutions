/**
 * Returns the indices of two elements in the given array that add up to the given target.
 * @param {number[]} nums - The array of numbers to search through.
 * @param {number} target - The target sum.
 * @returns {number[]} The indices of two elements that add up to the target.
 */
var twoSum = function(nums, target) {
    // Create an object to store the index of each number in the array.
    const pairIndex = {};

    // Iterate through the array and check if the target minus the current number
    // exists in the object. If it does, return the current index and the index
    // stored in the object.
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (target - num in pairIndex) {
            return [i, pairIndex[target - num]];
        }
        // If the target minus the current number does not exist in the object,
        // add the current number and its index to the object.
        pairIndex[num] = i;
    }    
};
