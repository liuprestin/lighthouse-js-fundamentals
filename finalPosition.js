//where moves is north/south, east/west
// east/West is X
// north/south is Y
// [x,y]
function finalPosition(moves) {
  let coordinates = [0, 0];
  for (const ele of moves) {
    if (ele == "north") {
      coordinates[1] += 1;
    }
    if (ele == "south") {
      coordinates[1] -= 1;
    }
    if (ele == "east") {
      coordinates[0] += 1;
    }
    if (ele == "west") {
      coordinates[0] -= 1;
    }
  }
  return coordinates;
}

/**
 * TEST
 */

let moves = [
    'north',
    'north',
    'west',
    'west',
    'north',
    'east',
    'north'
  ]

console.log(finalPosition(moves));
