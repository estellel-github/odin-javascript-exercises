// expect(removeFromArray([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
// });
// test.skip('removes multiple values', () => {
//   expect(removeFromArray([1, 2, 3, 4], 3, 2)).toEqual([1, 4]);
// });
// test.skip('removes multiple of the same value', () => {
//   expect(removeFromArray([1, 2, 2, 3], 2)).toEqual([1, 3]);
// });
// test.skip('ignores non present values', () => {
//   expect(removeFromArray([1, 2, 3, 4], 7, "tacos")).toEqual([1, 2, 3, 4]);
// });
// test.skip('ignores non present values, but still works', () => {
//   expect(removeFromArray([1, 2, 3, 4], 7, 2)).toEqual([1, 3, 4]);
// });
// test.skip('can remove all values', () => {
//   expect(removeFromArray([1, 2, 3, 4], 1, 2, 3, 4)).toEqual([]);
// });
// test.skip('works with strings', () => {
//   expect(removeFromArray(["hey", 2, 3, "ho"], "hey", 3)).toEqual([2, "ho"]);
// });
// test.skip('only removes same type', () => {
//   expect(removeFromArray([1, 2, 3], "1", 3)).toEqual([1, 2]);


const removeFromArray = function(array, ...params) {
  for (const param of params) {
    let i = 0;
    while (i < array.length) {
      if (param === array[i]) {
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