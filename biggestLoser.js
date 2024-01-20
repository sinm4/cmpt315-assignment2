const participants = require('./participants');

const biggestLoser = function(matches) {
    const participantList = participants(matches);

    const player = {};

    for (let i = 0; i < participantList.length; i++) {
        player[participantList[i]] = 0;
    }

    matches.forEach(function(match) {
        player[match.winner] += match.loser_points;
        player[match.loser] -= match.loser_points;
    });

    var points = 0;

    Object.values(player).forEach(function(point) {
        if (point < points) {
            points = point;
        }
    });

    for (var loser in player) {
        if (player[loser] === points) {
            return loser;
        }
    }
}

module.exports = biggestLoser;