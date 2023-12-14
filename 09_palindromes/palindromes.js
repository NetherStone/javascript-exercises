const palindromes = function (inputString) {
    let workingString = inputString.replace(/\W/g, '');
    workingString = workingString.toLowerCase();

    workingString = workingString.split('');
    let reverseWorkingString = workingString.reverse();

    for (let i = 0; i < workingString.length; i++) {
        if (workingString[i] !== reverseWorkingString[i]) {
            return false;
        } else {
            continue;
        }
    }

    return true;
};


// Do not edit below this line
module.exports = palindromes;
