// Write Javascript code!

// n = 0 
// w = 0 

// if the direction is north, add 1 (leaving)
// if the direction is south, subtract 1 (coming back)
// if the direction is west, add 1 (leaving)
// if the direction is east, subtract 1 (coming back)

// if the length of the walk is equal to 10 and n is 0 and w is 0, 
// return the walk length, otherwise return false

function isValidWalk(walk) {
  //insert brilliant code here
  let north = 0, west = 0;
  for (let i = 0; i < 10; i++) {
    if (walk[i] == 'n') {
     north +=1;
    } else if (walk[i] == 's') { 
     north -=1;
    } else if (walk[i] == 'w') {
       west +=1;
    } else if (walk[i] == 'e') {
       west -=1;
    } else {
      return false;
    }
  }
  return walk.length === 10 && north == 0 && west == 0;
}

console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s'])) // returns true
