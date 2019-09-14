function distanceFromHqInBlocks (block) {
    if (block > 42) {
      return block - 42;
    } else {
      return 42 - block;
    }
  }
  
function distanceFromHqInFeet (block) {
    return distanceFromHqInBlocks(block) * 264;
  }

function distanceTravelledInFeet (start, end) {
    if (start < end) {
        return (end - start) * 264;
    } else {
        return (start - end) * 264;
    }
}

function calculatesFarePrice (start, end) {
    const travel = distanceTravelledInFeet(start, end);

    if (travel <= 400) {
        return 0;
    } else if (travel > 400 && travel < 2000) {
        return (travel - 400) * 0.02;
    } else if (travel > 2000 && travel < 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}