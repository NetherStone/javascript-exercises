//Formulas for conversion taken from: https://en.wikipedia.org/wiki/Conversion_of_scales_of_temperature
const convertToCelsius = function(fahrenheit) {
  let convertedCelsius = 0;
  convertedCelsius = (fahrenheit - 32) * (5/9); // Formula for °F to °C:  x °F ≘ (x − 32) × 5/9 °C 
  convertedCelsius = parseFloat(convertedCelsius.toFixed(1))
  return convertedCelsius
};

const convertToFahrenheit = function() {
};

console.log(convertToCelsius(32))

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
