const findNaNIndex = function(array) {
    const results = [];

    for (let index = 0; index < array.length; index++) {
        if (isNaN(array[index])) {
            results.push(index);
        }
    }

    return results;
}

module.exports = findNaNIndex;