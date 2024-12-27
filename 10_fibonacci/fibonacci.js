const fibonacci = function (input) {
  let line;
  if (typeof input !== "number") {
    line = parseInt(input);
  } else {
    line = input;
  }
  if (line < 0) return "OOPS";
  if (line == 0) return 0;
  if (line === 1) return 1;
  if (line === 2) return 1;

  return fibonacci(line - 1) + fibonacci(line - 2);
};

// Do not edit below this line
module.exports = fibonacci;
