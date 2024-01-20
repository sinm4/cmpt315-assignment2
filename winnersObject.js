const participants = require('./participants');

const winnersObject = function(matches) {
    const participantList = participants(matches);

    const winners = {};

    for (let n = 0; n < participantList.length; n++) {
        winners[participantList[n]] = [];
    }

    matches.forEach(function(match) {
        if (winners[match.winner].indexOf(match.loser) === -1) {
            winners[match.winner].push(match.loser);
        }
    });

    return winners;
}

module.exports = winnersObject;