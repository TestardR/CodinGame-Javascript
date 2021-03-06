// MIME types are used in numerous internet protocols to associate a media type (html, image, video ...) with the content sent. The MIME type is generally inferred from the extension of the file to be sent.

// You have to write a program that makes it possible to detect the MIME type of a file based on its name.
//  	Rules
// You are provided with a table which associates MIME types to file extensions. You are also given a list of names of files to be transferred and for each one of these files, you must find the MIME type to be used.

// The extension of a file is defined as the substring which follows the last occurrence, if any, of the dot character within the file name.
// If the extension for a given file can be found in the association table (case insensitive, e.g. TXT is treated the same way as txt), then print the corresponding MIME type. If it is not possible to find the MIME type corresponding to a file, or if the file doesn’t have an extension, print UNKNOWN.
//  	Game Input
// Input
// Line 1: Number N of elements which make up the association table.

// Line 2: Number Q of file names to be analyzed.

// N following lines: One file extension per line and the corresponding MIME type (separated by a blank space).

// Q following lines: One file name per line.

// Output
// For each of the Q filenames, display on a line the corresponding MIME type. If there is no corresponding type, then display UNKNOWN.
// Constraints
// 0 < N < 10000
// 0 < Q < 10000
// File extensions are composed of a maximum of 10 alphanumerical ASCII characters.
// MIME types are composed of a maximum 50 alphanumerical and punctuation ASCII characters.
// File names are composed of a maximum of 256 alphanumerical ASCII characters and dots (full stops).
// There are no spaces in the file names, extensions or MIME types.

/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const N = +readline(); // Number of elements which make up the association table.
const Q = +readline(); // Number Q of file names to be analyzed.

// const getType = obj => {
//   const x = readline().split(` `);
//   obj[x[0].toLowerCase()] = x[1]; // Hash table with a key and a value
//   return obj;
// };

// const ext = [...Array(N)].reduce(getType, {}); // create such a table

// print(
//   [...Array(Q)]
//     .map(() => {
//       const extArr = readline()
//         .toLowerCase()
//         .split(`.`);
//       const n = extArr.length > 1 ? extArr.length - 1 : 1;
//       return ext[extArr[n]] || 'UNKNOWN';
//     })
//     .join('\n')
// );

const n = parseInt(readline()); // Number of elements which make up the association table.
const q = parseInt(readline()); // Number Q of file names to be analyzed.

var mimeMap = {};

for (var i = 0; i < n; i++) {
  var x = readline().split(' ');
  mimeMap[x[0].toLowerCase()] = x[1];
}

const getMimeType = fileName => {
  var qArray = fileName.split('.');
  if (qArray.length > 1) {
    let extension = qArray.pop().toLowerCase();
    if (mimeMap[extension]) {
      return mimeMap[extension];
    }
  }
  return 'UNKNOWN';
};

for (var j = 0; j < q; j++) {
  print(getMimeType(readline()));
}
