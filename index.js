function distanceFromHqInBlocks(streetnum) {
  let output
  if (streetnum > 42) {
    output = streetnum - 42
  }
  else {
    output = 42 - streetnum
  }
  return output
}

function  distanceFromHqInFeet(streetnum) {
  return distanceFromHqInBlocks(streetnum) * 264
}

function distanceTravelledInFeet(pickup, dropoff) {
  let output
  if (pickup > dropoff) {
    output = pickup - dropoff
  }
  else {
    output = dropoff - pickup
  }
  return output * 264
}

function calculatesFarePrice(pickup, dropoff) {
  const total_feet = distanceTravelledInFeet(pickup, dropoff)
  let output
  switch (true) {
    case total_feet <= 400:
      output = 0;
      break;
    case total_feet <= 2000:
      output = (total_feet - 400) * .02;
      break;
    case total_feet > 2500:
      output = "cannot travel that far";
      break;
    case total_feet > 2000:
      output = 25;
      break;
  }
  return output;
}