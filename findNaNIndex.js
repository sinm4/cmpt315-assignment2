/** This returns the indices of NaN within an array. */
const findNaNIndex = function(array) {
    const results = [];

    // Loop through array and find index of NaN(s)
    for (let i = 0; i < array.length; i++) {
        if (isNaN(array[i])) {
            results.push(i);
        }
    }

    return results;
}

module.exports = findNaNIndex;