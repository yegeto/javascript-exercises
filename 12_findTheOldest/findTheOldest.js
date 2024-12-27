const findAge = (person) => {
  if (!person.yearOfDeath) person.yearOfDeath = new Date().getFullYear();
  return person.yearOfDeath - person.yearOfBirth;
};
const findTheOldest = function (peopleArr) {
  return peopleArr.reduce((oldestPerson, currentPerson) => {
    const personAge = findAge(currentPerson);
    const oldestAge = findAge(oldestPerson);
    return personAge > oldestAge ? currentPerson : oldestPerson;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
