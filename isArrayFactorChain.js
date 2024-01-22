/** This returns true or false if array is a factor chain or not */
const isArrayFactorChain = function(array) {
    // If not a factor, return false, else return true
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i + 1] % array[i] !== 0) {
            return false;
        }
    }

    return true;
}

module.exports = isArrayFactorChain;