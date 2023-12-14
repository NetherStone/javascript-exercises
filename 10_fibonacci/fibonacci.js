const fibonacci = function(inputNumber) {
    if (typeof inputNumber === "string"){
        inputNumber = parseInt(inputNumber);
    }

    if (inputNumber < 0){
        return "OOPS"
    }
};

// Do not edit below this line
module.exports = fibonacci;
