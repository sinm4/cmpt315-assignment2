/** This returns all distinct names of participants */
const participants = function(matches) {
    const participantList = [];
    
    // Check if name is in participantsList, if so ignore, else add to list
    for (let i = 0; i < matches.length; i++) {
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