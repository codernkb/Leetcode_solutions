/**
 * Returns the rowIndex-th row of Pascal's Triangle.
 * @param {number} rowIndex - The row index of Pascal's Triangle to return.
 * @returns {number[]} The rowIndex-th row of Pascal's Triangle as an array.
 */
var getRow = function(rowIndex) {
    // Initialize the result array with the first element of the row set to 1.
    let res = [1];
    // Initialize the previous element in the row to 1.
    let prev = 1;
    // Iterate from 1 to rowIndex and calculate each element in the row.
    for (let k = 1; k <= rowIndex; k++) {
        // Calculate the next element in the row using the formula.
        let next_val = prev * (rowIndex - k + 1) / k;
        // Add the next element to the result array.
        res.push(next_val);
        // Update the previous element to the next element.
        prev = next_val;
    }
    // Return the result array.
    return res;
};
