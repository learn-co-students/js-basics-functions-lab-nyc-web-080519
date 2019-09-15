function distanceFromHqInBlocks(location) {
    let hqLocation = 42;
    if (hqLocation > location) {
    return hqLocation - location}
    else return location - hqLocation   
}

function distanceFromHqInFeet(location) {
    let hqLocation = 42;
    if (hqLocation > location) {
    return (hqLocation - location) * 264}
    else return (location - hqLocation) *264   
}

function distanceTravelledInFeet(startLocation, endLocation) {
    if (startLocation > endLocation) {
    return (startLocation - endLocation) * 264}
    else return (endLocation - startLocation) * 264
}

function calculatesFarePrice (start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      return .02 * (distance - 400);
    } else if (distance > 2000 && distance < 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }