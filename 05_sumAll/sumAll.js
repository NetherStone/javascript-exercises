const sumAll = function(a, b) {
    let finalSum = 0;
    let smallNumber = 0;
    let bigNumber = 0;
    
    if (a < b) {
        smallNumber = a;
        bigNumber = b;
    } else {
        smallNumber = b;
        bigNumber = a;
    }
    for (let i = smallNumber; i < bigNumber; i++) {
        finalSum += i
    }
    finalSum += bigNumber

    return finalSum
};

// Do not edit below this line
module.exports = sumAll;
