const leapYears = function (year) {
  if (!(year % 400) || (!(year % 4) && year % 100)) return true;
  return false;
};

// Do not edit below this line
module.exports = leapYears;
