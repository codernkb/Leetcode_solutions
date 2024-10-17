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


/**
 * Searches for a given target in a sorted array and returns the index at which the target should be inserted to maintain the sorted order.
 * Uses binary search for O(log n) complexity.
 * @param {number[]} nums - The sorted array to search through.
 * @param {number} target - The target number to search for.
 * @returns {number} The index at which the target should be inserted.
 */
var searchInsert = function(nums, target) {
    let start = 0; // Initialize the start pointer
    let end = nums.length - 1; // Initialize the end pointer

    // Perform binary search
    while (start <= end) {
        let mid = Math.floor((start + end) / 2); // Calculate the middle index

        // Check if the middle element is the target
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] > target) {
            end = mid - 1; // Adjust the end pointer
        } else {
            start = mid + 1; // Adjust the start pointer
        }
    }

    // Return the position where the target should be inserted
    return start;    
};
