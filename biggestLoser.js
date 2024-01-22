/** Get participants list */
const participants = require('./participants');

/** Returns the loser with most amount of loser points */
const biggestLoser = function(matches) {
    const participantList = participants(matches);

    const player = {};

    // Set each point as 0 for every participant
    for (let i = 0; i < participantList.length; i++) {
        player[participantList[i]] = 0;
    }

    // For every match increment points for winner, decrement points for loser
    matches.forEach(function(match) {
        player[match.winner] += match.loser_points;
        player[match.loser] -= match.loser_points;
    });

    // Used to track biggest loser points
    var points = 0;

    // For every player, if score is lower, make points equal to their point
    Object.values(player).forEach(function(point) {
        if (point < points) {
            points = point;
        }
    });

    // Return name of loser with most amount of loser points
    for (var loser in player) {
        if (player[loser] === points) {
            return loser;
        }
    }
}

module.exports = biggestLoser;