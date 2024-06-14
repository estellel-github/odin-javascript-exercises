// MY INITIAL SOLUTION
// In the Gregorian calendar currently in use worldwide (except perhaps the Russian and Iranian calendars), there is a leap year every year divisible by four except for years which are both divisible by 100 and not divisible by 400.

// const leapYears = function (year) {
// Check if this is true: year divisible by 4, and if this is false: year divisible by 100 and not divisible by 400
//   if (year % 4 === 0 && !((year % 100 === 0) && (year % 400 !== 0))) {
//     return true;
//   }
//   return false;
// };

// Shorter/simpler, from solution
// Do the return directly, and use OR in second part instead
const leapYears = function (year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}

console.log(leapYears(1996));

// Do not edit below this line
module.exports = leapYears;
