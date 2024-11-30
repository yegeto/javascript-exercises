const convertToCelsius = function (inputYear) {
  return Number((((inputYear - 32) * 5) / 9).toFixed(1));
};

const convertToFahrenheit = function (inputYear) {
  return Number(((inputYear * 9) / 5 + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
