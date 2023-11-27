const reverseString = function(string) {
    var splitString = string.split('');
    splitString = splitString.reverse();
    splitString = splitString.join('');
    return splitString
};

// Do not edit below this line
module.exports = reverseString;
