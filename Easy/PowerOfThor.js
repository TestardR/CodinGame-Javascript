// The program must first read the initialization data from the standard input, then, in an infinite loop, provides on the standard output the instructions to move Thor.
// Initialization input
// Line 1: 4 integers lightX lightY initialTX initialTY. (lightX, lightY) indicates the position of the light. (initialTX, initialTY) indicates the initial position of Thor.
// Input for a game round
// Line 1: the number of remaining moves for Thor to reach the light of power: remainingTurns. You can ignore this data but you must read it.
// Output for a game round
// A single line providing the move to be made: N NE E SE S SW W ou NW
// Constraints
// 0 ≤ lightX < 40
// 0 ≤ lightY < 18
// 0 ≤ initialTX < 40
// 0 ≤ initialTY < 18
// Response time for a game round ≤ 100ms

var inputs = readline().split(' ');
const Lx = parseInt(inputs[0]); // the X position of the light of power
const Ly = parseInt(inputs[1]); // the Y position of the light of power
let Tx = parseInt(inputs[2]); // Thor's starting X position
let Ty = parseInt(inputs[3]); // Thor's starting Y position

// game loop
while (true) {
  const remainingTurns = parseInt(readline()); // The remaining amount of turns Thor can move. Do not remove this line.
  let move = '';

  if (Ty > Ly && Ty > 0) {
    Ty--;
    move += 'N';
  } else if (Ty < Ly && Ty < 17) {
    Ty++;
    move += 'S';
  }

  if (Tx > Lx && Tx > 0) {
    Tx--;
    move += 'W';
  } else if (Tx < Lx && Tx < 39) {
    Tx++;
    move += 'E';
  }

  console.log(move);
}
