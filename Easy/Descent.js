// The Goal
// Destroy the mountains before your starship collides with one of them. For that, shoot the highest mountain on your path.
//  	Rules
// At the start of each game turn, you are given the height of the 8 mountains from left to right.
// By the end of the game turn, you must fire on the highest mountain by outputting its index (from 0 to 7).

// Firing on a mountain will only destroy part of it, reducing its height. Your ship descends after each pass.

// Constraints
// 0 ≤ mountainH ≤ 9
// Response time per turn ≤ 100ms

// game loop
while (true) {
  var position = 0;
  var hmax = 0;

  for (let i = 0; i < 8; i++) {
    var mountainH = parseInt(readline()); // represents the height of one mountain.
    if (mountainH > hmax) {
      hmax = mountainH;
      position = i;
    }
  }

  console.log(position);
}
