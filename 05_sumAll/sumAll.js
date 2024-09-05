const sumAll = function (min, max) {
  if (
    Math.sign(min) === -1 ||
    Math.sign(max) === -1 ||
    typeof (min) !== "number" ||
    typeof (max) !== "number"
  ) {
    return "ERROR";
  } else {
    const range = (start, end) => {
      let output = [];
      let firstNumber;
      let secondNumber;
      if (min < max) {
        firstNumber = min;
        secondNumber = max;
      } else {
        firstNumber = max;
        secondNumber = min;
      }
      for (let i = firstNumber; i <= secondNumber; i += 1) {
        output.push(i);
      }
      return output;
    };

    const rangeArray = range(min, max);
    return rangeArray.reduce((a, b) => a + b, 0);
  }
};

console.log(sumAll(1, 4));
console.log(sumAll(0, 4000));
console.log(sumAll(123, 1));
console.log(sumAll(-10, 4));
console.log(sumAll(10, "90"));
console.log(sumAll(10, [90, 1]));

// Do not edit below this line
module.exports = sumAll;
