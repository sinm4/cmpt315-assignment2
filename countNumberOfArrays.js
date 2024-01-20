const countNumberOfArrays = function(array) {
    var count = 0;

    for (let i = 0; i < array.length; i++) {
        if (typeof(array[i]) !== 'number') {
            count++;
        }
    }
    return count;
}

module.exports = countNumberOfArrays;