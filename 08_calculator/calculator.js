const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  if (array.length === 0) {
    return 0;
  }
  return array.reduce((total, currentItem) => total + currentItem);
};

const multiply = function (array) {
  return array.reduce((total, currentItem) => total * currentItem);
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (a) {
  if (a === 0) {
    return 1;
  }
  return a * factorial(a - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
