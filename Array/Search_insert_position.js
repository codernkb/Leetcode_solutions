/**
 * Searches for a given target in a sorted array and returns the index at which the target should be inserted to maintain the sorted order.
 * @param {number[]} nums - The sorted array to search through.
 * @param {number} target - The target number to search for.
 * @returns {number} The index at which the target should be inserted.
 */
var searchInsert = function(nums, target) {
    // Initialize a variable to keep track of the index at which the target should be inserted.
    let k = 0;

    // Iterate through the array and check if the current element is less than the target.
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < target) {
            // If the current element is less than the target, increment k to keep track of the index at which the target should be inserted.
            nums[k] = nums[i];
            k++;
        }
    }

    // Return the index at which the target should be inserted.
    return k;
};
