const checkAge = (yearOfDeath, yearOfBirth) => {
  if (!yearOfDeath) {
    yearOfDeath = new Date().getFullYear();
  }
  return yearOfDeath - yearOfBirth;
}

const findTheOldest = (array) => {
  let newArray = array.reduce((oldestPerson, currentPerson) => {
    const oldestAge = checkAge(oldestPerson.yearOfDeath, oldestPerson.yearOfBirth);
    const currentAge = checkAge(currentPerson.yearOfDeath, currentPerson.yearOfBirth);
    return oldestAge < currentAge ? currentPerson : oldestPerson;
  })
  return newArray;
}

const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
]

console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
