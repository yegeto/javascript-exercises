const repeatString = function (input, repeatAmount) {
  if (repeatAmount < 0) return "ERROR";
  let output = "";
  for (let i = 0; i < repeatAmount; i++) {
    output += input;
  }
  return output;
};

// Do not edit below this line
module.exports = repeatString;
