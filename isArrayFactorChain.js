const isArrayFactorChain = function(array) {
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i + 1] % array[i] !== 0) {
            return false;
        }
    }
    return true;
}

module.exports = isArrayFactorChain;