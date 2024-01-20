# CMPT 315 Assignment 2 3037300 sinm4
Assignment 2 of CMPT 315 to export functions in JS, using NPM.

## Purpose
**_BEWARE:_ This library was published for learning purposes.

## Usage
**Install it:**
`npm install sinm4-cmpt315assignment2`

**Require it:**
`const _ = require('sinm4-cmpt315assignment2');`

**Call it:**
`const results = _.firstFunction()`

## Documentation
The following functions are currently implemented:
* `findNaNIndex()`: Finds all indexes where NaN is found in given array.
* `isArrayFunctionChain()`: Return True or False if an array is a factor chain or not.
* `countNumberOfArrays`: Return the count for the number of arrays inside a given array.
* `participants()`: Returns an array of all the players names. (no player should be listed more than once).
* `winnersObject()`: Returns an object which lists each participant, and a list of who they've beaten.
* `biggestLoser()`: Returns the player name with the largest tally of loser points.