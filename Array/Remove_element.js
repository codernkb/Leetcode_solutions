/**
 * Removes all instances of a given element from a given array in-place.
 * @param {number[]} nums - The array from which to remove the element.
 * @param {number} val - The element to remove.
 * @returns {number} The new length of the array after removing the element.
 */
var removeElement = function(nums, val) {
    // Initialize a variable to keep track of the next position to place a non-val element.
    let k = 0;

    // Iterate through the array and check if the current element is not equal to val.
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            // If the current element is not equal to val, place it at the current index of k.
            nums[k] = nums[i];
            // Increment k to keep track of the next position to place a non-val element.
            k++;
        }
    }

    // Return the new length of the array after removing the element.
    return k;
};
