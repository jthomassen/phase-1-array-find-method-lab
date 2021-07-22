function findFunction(record){
    return (record.result === "W")
}

function superbowlWin(record){
    const finder = record.find(findFunction)
    return (finder === undefined ? undefined : finder.year)
}


























// function superbowlWin(arr) {
//     const finder = arr.find(arr => arr.result === 'W')
//     return (finder === undefined ? undefined : finder.year)
// }