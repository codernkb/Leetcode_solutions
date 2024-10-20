/**
 * Generates Pascal's Triangle up to the specified number of rows.
 * @param {number} numRows - The number of rows to generate.
 * @returns {number[][]} A 2D array representing Pascal's Triangle.
 */
var generate = function(numRows) {
    // Base case: return an empty array if numRows is 0.
    if (numRows === 0) {
        return [];
    }
    // Base case: return a single row if numRows is 1.
    if (numRows === 1) {
        return [[1]];
    }    
    // Recursively generate the previous rows of Pascal's Triangle.
    let prevRows = generate(numRows - 1);
    
    // Initialize the new row with 1s.
    let newRow = new Array(numRows).fill(1);
    
    // Fill the new row with the sum of the two numbers directly above it in the triangle.
    for (let i = 1; i < numRows - 1; i++) {
        newRow[i] = prevRows[numRows - 2][i - 1] + prevRows[numRows - 2][i];
    }
    
    // Add the new row to the previously generated rows.
    prevRows.push(newRow);
    
    // Return the complete Pascal's Triangle up to numRows.
    return prevRows;
};
