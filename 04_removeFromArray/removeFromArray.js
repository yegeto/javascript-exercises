const removeFromArray = function (array, ...unwanted) {
  const unwantedIndexArray = [];
  for (const piece of unwanted) {
    array.forEach((element, index) => {
      if (piece === element) {
        unwantedIndexArray.push(index);
      }
    });
  }
  unwantedIndexArray.sort((a, b) => b - a);
  for (const element of unwantedIndexArray) {
    array.splice(element, 1);
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
