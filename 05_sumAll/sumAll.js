const sumAll = function (...numberInputs) {
  const checkInputsAreIntegers = (array) => {
    return array.every((number) => Number.isInteger(number) && number >= 0);
  };
  if (checkInputsAreIntegers(numberInputs)) {
    const sortedIntegers = numberInputs.sort((a, b) => a - b);
    let result = 0;
    for (let i = sortedIntegers[0]; i <= sortedIntegers[1]; i++) {
      result += i;
    }
    return result;
  }
  return "ERROR";
};

// Do not edit below this line
module.exports = sumAll;
