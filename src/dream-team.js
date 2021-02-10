
module.exports = function createDreamTeam(members) {
    if(!Array.isArray(members)) return false
    const filtered = members.filter(el => typeof el === 'string')
    const res = filtered.map(el => el.trim()[0].toUpperCase())
    return res.sort().join('')
};
