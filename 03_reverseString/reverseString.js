const reverseString = function(string) {
  let stringArray = string.split("");
  let invertedArray = stringArray.reverse();
  let invertedString = invertedArray.join("");
  
  return invertedString;
};

console.log(reverseString("Hello"));
console.log(reverseString("hello there"));
console.log(reverseString("123! abc! Hello, Odinite."));
console.log(reverseString(""));

// Do not edit below this line
module.exports = reverseString;
