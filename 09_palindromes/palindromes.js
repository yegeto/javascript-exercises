const palindromes = function (input) {
  const removedUnwantedSpecs = input.replace(/[^\w]|_/g, "").toLowerCase();
  const reversedInput = removedUnwantedSpecs.split("").reverse().join("");
  return reversedInput === removedUnwantedSpecs;
};

// Do not edit below this line
module.exports = palindromes;
