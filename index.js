// Code your solution in this file!
function distanceFromHqInBlocks (block) {
    //returns the number of blocks given a value
    if (block > 42) {
        return block - 42;
    }
    else {
        return 42 - block;
    }
  }
   
  function distanceFromHqInFeet (block) {
    return distanceFromHqInBlocks(block) * 264;
    // calls distanceFromHqInBlocks from inside the distanceFromHqInFeet function, passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
    //the return value of distanceFromHqInBlocks can then be used to calculate feet
  }

  function distanceTravelledInFeet(block1, block2) {
    if (block1 > block2) {
        return (block1 - block2) * 264;
    }
    else {
        return (block2 - block1) * 264;
    }
  }

  function calculatesFarePrice(block1, block2) {
      const distance = distanceTravelledInFeet(block1, block2);
      if (distance <= 400) {
          return 0;
      }
      else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02;
      }
      else if (distance > 2000 && distance <= 2500) {
          return 25;
      }
      else {
          return "cannot travel that far";
      }
}