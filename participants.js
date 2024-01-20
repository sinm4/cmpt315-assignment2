const participants = function(matches) {
    const participantList = [];

    for (let i = 0; i < matches.length; i++) {
        // console.log(matches[i]);
        // console.log(matches[i].winner);
        if (participantList.indexOf(matches[i].winner) === -1) {
            participantList.push(matches[i].winner);
        }
        if (participantList.indexOf(matches[i].loser) === -1) {
            participantList.push(matches[i].loser);
        }
    }
    return participantList;
}

module.exports = participants;