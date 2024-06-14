// After checking solution: rename params to args

const removeFromArray = function(array, ...args) {
  for (const arg of args) {
    let i = 0;
    while (i < array.length) {
      if (arg === array[i]) {
        array.splice(i, 1);
      } else {
        i++;
      }
    }
  }
  return array;
  };

console.log(removeFromArray([1, 2, 3, 4], 3));
console.log(removeFromArray([1, 2, 3, 4], 3, 2));
console.log(removeFromArray([1, 2, 2, 3], 2));
console.log(removeFromArray([1, 2, 3, 4], 7, "tacos"));
console.log(removeFromArray([1, 2, 3, 4], 7, 2));
console.log(removeFromArray([1, 2, 3, 4], 1, 2, 3, 4));
console.log(removeFromArray(["hey", 2, 3, "ho"], "hey", 3));
console.log(removeFromArray([1, 2, 3], "1", 3))

// Do not edit below this line
module.exports = removeFromArray;