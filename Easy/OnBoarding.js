// The Goal
// Your program must destroy the enemy ships by shooting the closest enemy on each turn.
//  	Rules
// On each start of turn (within the game loop), you obtain information on the two closest enemies:
// enemy1 and dist1: the name and the distance to enemy 1.
// enemy2 and dist2: the name and the distance to enemy 2.
// Before your turn is over (end of the loop), output the value of either enemy1 or enemy2 to shoot the closest enemy.

// game loop
while (true) {
  const enemy1 = readline(); // name of enemy 1
  const dist1 = parseInt(readline()); // distance to enemy 1
  const enemy2 = readline(); // name of enemy 2
  const dist2 = parseInt(readline()); // distance to enemy 2

  // Write an action using console.log()
  // To debug: console.error('Debug messages...');
  if (dist1 > dist2) {
    console.log(enemy2);
  } else {
    console.log(enemy1);
  }
}
