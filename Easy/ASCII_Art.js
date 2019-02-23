// ASCII art allows you to represent forms by using characters. To be precise, in our case, these forms are words. For example, the word "MANHATTAN" could be displayed as follows in ASCII art:

// # #  #  ### # #  #  ### ###  #  ###
// ### # # # # # # # #  #   #  # # # #
// ### ### # # ### ###  #   #  ### # #
// # # # # # # # # # #  #   #  # # # #
// # # # # # # # # # #  #   #  # # # #

// ​Your mission is to write a program that can display a line of text in ASCII art in a style you are given as input.

// Input
// Line 1: the width L of a letter represented in ASCII art. All letters are the same width.

// Line 2: the height H of a letter represented in ASCII art. All letters are the same height.

// Line 3: The line of text T, composed of N ASCII characters.

// Following lines: the string of characters ABCDEFGHIJKLMNOPQRSTUVWXYZ? Represented in ASCII art.

// Output
// The text T in ASCII art.
// The characters a to z are shown in ASCII art by their equivalent in upper case.
// The characters that are not in the intervals [a-z] or [A-Z] will be shown as a question mark in ASCII art.
// Constraints
// 0 < L < 30
// 0 < H < 30
// 0 < N < 200

const L = parseInt(readline()); // the width L of a letter represented in ASCII art.
const H = parseInt(readline()); // the height H of a letter represented in ASCII art.
const T = readline().toLowerCase(); // The line of text T, composed of N ASCII characters.

for (let i = 0; i < H; i++) {
  let row = readline();
  let str = '';

  for (let j = 0; j < T.length; j++) {
    // Define the position of current letter in the alphabet
    let index = (T[j].charCodeAt(0) - 97) * L;
    if (index < 0) {
      index = 26 * L;
    }
    // Add current piece of selected letter
    str += row.slice(index, index + L);
  }

  print(str);
}
