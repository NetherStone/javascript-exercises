const fibonacci = function(inputNumber) {
    if (typeof inputNumber === "string"){
        inputNumber = parseInt(inputNumber);
    }

    if (inputNumber < 0){
        return "OOPS";
    }

    let fibonacciArray = [];

    for (let i = 1; i < inputNumber + 1; i++) {
        if (i === 1 || i === 2) {
            fibonacciArray.push(1);
        } else {
            fibonacciArray.push(fibonacciArray[i-3] + fibonacciArray[i-2]);
        }
    }

    return fibonacciArray[inputNumber-1];
};

// Do not edit below this line
module.exports = fibonacci;
