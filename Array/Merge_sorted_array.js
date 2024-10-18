/**
 * Merges two sorted arrays, nums1 and nums2, into a single sorted array in-place.
 * The first array, nums1, has enough space to hold the elements of both arrays.
 * @param {number[]} nums1 - The first sorted array, which has a length of at least m + n.
 * @param {number} m - The number of elements initially in nums1.
 * @param {number[]} nums2 - The second sorted array.
 * @param {number} n - The number of elements in nums2.
 */
var merge = function(nums1, m, nums2, n) {
    let midx = m - 1; // Initialize index for the last element in nums1's valid portion.
    let nidx = n - 1; // Initialize index for the last element in nums2.
    let right = m + n - 1; // Initialize index for the last position of the merged array in nums1.

    // Merge the arrays starting from the end to avoid overwriting elements in nums1.
    while (nidx >= 0) {
        // If nums1's current element is greater, place it at the current end position of the merged array.
        if (midx >= 0 && nums1[midx] > nums2[nidx]) {
            nums1[right] = nums1[midx];
            midx--;
        } else {
            // Otherwise, place nums2's current element at the current end position.
            nums1[right] = nums2[nidx];
            nidx--;
        }
        right--; // Move to the next position in the merged array.
    }    
};
