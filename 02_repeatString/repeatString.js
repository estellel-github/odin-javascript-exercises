const repeatString = function(string, num) {
  if (num < 0) {
    return "ERROR";
  }
  else {
  return (string.repeat(num));
  }
};

repeatString("hey", 3);
repeatString("hello", 10);
repeatString("hi", 1);
repeatString("bye", 0);
repeatString("goodbye", -1);
repeatString("", 10);


// Do not edit below this line
module.exports = repeatString;