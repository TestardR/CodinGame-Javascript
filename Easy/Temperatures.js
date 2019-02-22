// Write a program that prints the temperature closest to 0 among input data. If two numbers are equally close to zero, positive integer has to be considered closest to zero (for instance, if the temperatures are -5 and 5, then display 5).

// Your program must read the data from the standard input and write the result on the standard output.
// Input
// Line 1: N, the number of temperatures to analyze

// Line 2: A string with the N temperatures expressed as integers ranging from -273 to 5526

// Output
// Display 0 (zero) if no temperatures are provided. Otherwise, display the temperature closest to 0.
// Constraints
// 0 ≤ N < 10000
// Example
// Input
// 5
// 1 -2 -8 4 5
// Output
// 1

/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const n = parseInt(readline()); // the number of temperatures to analyse
var temps = readline();
var arrayTemp = temps.split(' ');
var min = arrayTemp[0];

if (temps) {
  for (var i = 1; i < arrayTemp.length; i++) {
    if (Math.abs(min) > Math.abs(arrayTemp[i])) {
      min = arrayTemp[i];
    } else if (Math.abs(min) == Math.abs(arrayTemp[i]) && min < arrayTemp[i]) {
      min = arrayTemp[i];
    }
  }
  console.log(min);
} else {
  console.log(0);
}
