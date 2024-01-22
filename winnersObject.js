/** Get participant list */
const participants = require('./participants');

/** Returns object of participants and list of people they've beaten */
const winnersObject = function(matches) {
    const participantList = participants(matches);

    const winners = {};

    // Set each winners list as empty
    for (let n = 0; n < participantList.length; n++) {
        winners[participantList[n]] = [];
    }

    // For each loser, add their name to winner's list
    matches.forEach(function(match) {
        if (winners[match.winner].indexOf(match.loser) === -1) {
            winners[match.winner].push(match.loser);
        }
    });

    return winners;
}

module.exports = winnersObject;