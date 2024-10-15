/**
 * Removes duplicates from a sorted array in-place.
 * @param {number[]} nums - The array from which to remove duplicates.
 * @returns {number} The new length of the array after removing duplicates.
 */
var removeDuplicates = function(nums) {
    // Initialize index to keep track of the next position to place a unique element.
    let i = 1

    // Iterate through the array and check if the current element is different from the previous one.
    for(let j = 1; j <nums.length; j++){
        // If the current element is different from the previous one, place it at the next index.
        if(nums[j] !== nums[i-1]){
            nums[i] = nums[j]
            // Increment the index to keep track of the next position to place a unique element.
            i++
        }
    }

    // Return the new length of the array after removing duplicates.
    return i
};
