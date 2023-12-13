const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(numberArray) {
  if (numberArray.length === 0) {
    return 0;
  }
  let totalSum = 0;
  numberArray.forEach((element) => totalSum += element);
  return totalSum;
};

const multiply = function(numberArray) {
  let totalSum = 1;
  numberArray.forEach((element) => totalSum *= element);
  return totalSum;
};

const power = function(a ,b) {
	return a ** b;
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
