const removeFromArray = function(array, ...toRemove) {
    let editedArray = array;
    const args = Array.from(toRemove);
    for (let i = 0; i < args.length; i++) {
        while (editedArray.includes(args[i])) {
            let indexToRemove = editedArray.indexOf(args[i]);
            editedArray.splice(indexToRemove, 1);
        }
    }
    return editedArray
}

// Do not edit below this line
module.exports = removeFromArray;
