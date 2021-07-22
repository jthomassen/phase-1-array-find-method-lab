function findFunction(record){
    return (record.result === "W")
}

function superbowlWin(records){
    const win = records.find(findFunction)
    console.log(win)
    return (win === undefined ? undefined : win.year)
}


























// function superbowlWin(arr) {
//     const finder = arr.find(arr => arr.result === 'W')
//     return (finder === undefined ? undefined : finder.year)
// }