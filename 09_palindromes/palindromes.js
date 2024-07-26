const palindromes = function (word) {
  word = word.toLowerCase().split("").filter((char) => char.match(char.match(/\p{L}|\p{N}/u))).join("");
  length = word.length;
  check = true;
  for (let i = 0; i <= length / 2; i++) {
    if (word[i] != word[length-1-i]) {
      console.log(i, length, word[i], word[length-1-i])
      return check = false;
    }
    check = true;
  }
  return check;
};

console.log(palindromes("abc"));
console.log(palindromes("racecar"));
console.log(palindromes("r3aceca3r"));

// Do not edit below this line
module.exports = palindromes;
