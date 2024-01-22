/* Array Function Tests */

// Test findNanIndex:
const findNaNIndex = require('./findNaNIndex');

const testNaN1 = findNaNIndex([2, NaN, 8, 16, 32]) // => [1]
const testNaN2 = findNaNIndex([2, 4, NaN, 16, 32, NaN]) // => [2,5]
const testNaN3 = findNaNIndex([2, 4, 16, 32]) // => []
console.log(testNaN1, testNaN2, testNaN3);

// Test isArrayFactorChain
const isArrayFactorChain = require('./isArrayFactorChain');

const testFactorChain1 = isArrayFactorChain([2, 4, 8, 16, 32]) // => true
const testFactorChain2 = isArrayFactorChain([2, 4, 8, 16, 32, 68]) // => false
console.log(testFactorChain1, testFactorChain2);

// Test countNumberOfArrays
const countNumberOfArrays = require('./countNumberOfArrays');

const testCount1 = countNumberOfArrays([2,8,[6],3,3,5,3,4,[5,4]]) // => 2
const testCount2 = countNumberOfArrays([2,8,[6,3,3],[4],5,[3,4,[5,4]]]) // => 3
console.log(testCount1, testCount2);

/* Object Function Tests */
const matches = [
    { winner: 'Alice', loser: 'Bob',   loser_points: 3 },
    { winner: 'Carol', loser: 'Dean',  loser_points: 1 },
    { winner: 'Elise', loser: 'Bob',   loser_points: 2 },
    { winner: 'Elise', loser: 'Carol', loser_points: 4 },
    { winner: 'Alice', loser: 'Carol', loser_points: 2 },
    { winner: 'Carol', loser: 'Dean',  loser_points: 3 },
    { winner: 'Dean',  loser: 'Elise', loser_points: 2 },
]

// Test participants
const participants = require('./participants');

const testParticipants = participants(matches) // => ['Alice', 'Bob', 'Carol', 'Dean', 'Elise']
console.log(testParticipants);

// Test winnersObject
const winnersObject = require('./winnersObject');

const testWinners = winnersObject(matches) 
console.log(testWinners);
//   {
//     'Alice': ['Bob', 'Carol'],
//     'Bob':   [],
//     'Carol': ['Dean'],
//     'Dean':  ['Elise'],
//     'Elise': ['Bob', 'Carol'],
//   }

// Test biggestLoser
const biggestLoser = require('./biggestLoser');

const testLoser = biggestLoser(matches) // => 'Bob'
console.log(testLoser);