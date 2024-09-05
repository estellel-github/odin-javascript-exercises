const sumAll = function (min, max) {
  //Check if input negative
  if (min < 0 || max < 0) {
    return "ERROR";
  }
  // Check if input not integers
  if (!Number.isInteger(min) || !Number.isInteger(max)) {
    return "ERROR";
  }

  // Swap numbers if min > max (array destructuring)
  if (min > max) [min, max] = [max, min];

  let output = 0;

  for (let i = min; i <= max; i++) {
    output += i;
  }
  return output;
};

console.log(sumAll(1, 4));
console.log(sumAll(0, 4000));
console.log(sumAll(123, 1));
console.log(sumAll(-10, 4));
console.log(sumAll(10, "90"));
console.log(sumAll(10, [90, 1]));

// Do not edit below this line
module.exports = sumAll;