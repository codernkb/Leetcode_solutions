//JavaScript COde
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * Converts a sorted array into a height-balanced binary search tree.
 * @param {number[]} nums - The sorted array to convert.
 * @param {number} [left=0] - The left index for the current subarray.
 * @param {number} [right=nums.length-1] - The right index for the current subarray.
 * @returns {TreeNode} The root of the height-balanced binary search tree.
 */
var sortedArrayToBST = function(nums, left = 0, right = nums.length - 1) {
    // Base case: if left index exceeds right, return null indicating no node.
    if (left > right) 
        return null;
    
    // Find the middle index of the current subarray.
    const mid = Math.floor((left + right) / 2);

    // Create a new tree node with the middle element as its value.
    const node = new TreeNode(nums[mid]);
    
    // Recursively construct the left subtree.
    node.left = sortedArrayToBST(nums, left, mid - 1);

    // Recursively construct the right subtree.
    node.right = sortedArrayToBST(nums, mid + 1, right);
    
    // Return the constructed binary search tree node.
    return node;
}
