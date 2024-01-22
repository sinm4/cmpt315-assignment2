/** This returns the total number of arrays inside a given array */
const countNumberOfArrays = function(array) {
    var count = 0;

    /* Assuming only numbers and arrays are allowed, this checks for type and
       increments if type of item is not a number */
    for (let i = 0; i < array.length; i++) {
        if (typeof(array[i]) !== 'number') {
            count++;
        }
    }

    return count;
}

module.exports = countNumberOfArrays;