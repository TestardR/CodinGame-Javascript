// Question 1: Sum all numbers
// Write a function called sumRange. It will take a number and return the sum of all numbers from 1 up to the number passed in.
// Sample: sumRange(3) returns 6, since 1 + 2 + 3 = 6.
const sumRange = num => {
  if (num == 1) {
    return num;
  }
  return num + sumRange(num - 1);
};

// console.log(sumRange(3));

// Question 2: Power function
// Write a function called power which takes in a base and an exponent. If the exponent is 0, return 1.
// Sample:

// console.log(power(2, 4)); // 16
// console.log(power(2, 3)); // 8

// const power = (base, exp) => {
//   if (exp == 0) return 1;
//   return base * Math.pow(base, exp - 1);
// };

const power = (base, exp) => {
  if (exp == 0) return 1;
  return base * power(base, exp - 1);
};

// console.log(power(2, 2));

// Question 3: Calculate factorial
// Write a function that returns the factorial of a number. As a quick refresher, a factorial of a number is the result of that number multiplied by the number before it, and the number before that number, and so on, until you reach 1. The factorial of 1 is just 1.

const factorial = n => {
  if (n == 1) return 1;
  return n * factorial(n - 1);
};

// console.log(factorial(5));

// Question 4: Check all values in an array
// Write a function called all which accepts an array and a callback and returns true if every value in the array returns true when passed as parameter to the callback function

const all = (array, callback) => {
  var copy = copy || array.slice(); // shallow copy

  if (copy.length === 0) return true;

  if (callback(copy[0])) {
    copy.shift();
    return all(copy, callback);
  } else {
    return false;
  }
};

var allAreLessThanEight = all([1, 2, 8], function(num) {
  return num < 8;
});

// console.log(allAreLessThanEight);

// Question 5: Product of an array
// Write a function called productOfArray which takes in an array of numbers and returns the product of them all
// Sample:
// var six = productOfArray([1,2,3]) // 6

const productOfArray = array => {
  if (array.length === 0) return 1;

  return array.shift() * productOfArray(array);
};

// console.log(productOfArray([1, 2, 3]));

// Question 6: Search JS object
// Write a function called contains that searches for a value in a nested object. It returns true if the object contains that value.

/* Sample:

var nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2'
                    }
                }
            }
        }
    }
}

let hasIt = contains(nestedObject, 44); // true
let doesntHaveIt = contains(nestedObject, "foo"); // false */

const contains = (obj, value) => {
  for (var key in obj) {
    if (typeof obj[key] === 'object') return contains(obj[key], value);
    if (obj[key] === value) {
      return true;
    }
  }
  return false;
};

var nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: 'foo2'
          }
        }
      }
    }
  }
};

// console.log(contains(nestedObject, 44));
// console.log(contains(nestedObject, 'foo'));

// Question 7:
// The function should return an array containing repetitions of the number argument. For instance, replicate(3, 5) should return [5,5,5]. If the times argument is negative, return an empty array.

// Sample:

// console.log(replicate(3, 5)); // [5, 5, 5]
// console.log(replicate(1, 69)) // [69]
// console.log(replicate(-2, 6)) // []

const replicate = (times, number) => {
  if (times <= 0) return [];
  return [number].concat(replicate(times - 1, number));
};

// console.log(replicate(3, 5)); // [5, 5, 5]
