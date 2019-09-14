// Code your solution in this file!

const hq = 42

function distanceFromHqInBlocks(number){
  let block = Math.abs(hq - number)
  return block

}

function distanceFromHqInFeet(block){
  let feet = Math.abs(block - hq) * 264 
  return feet 
}

function distanceTravelledInFeet(block1, block2){
  let distance = Math.abs(block1-block2) * 264
  return distance 
}

function calculatesFarePrice(start, destination){
  let distance = distanceTravelledInFeet(start, destination) 
  let value 
  if(distance <= 400){
    value = 0
  } else if (distance > 2500){
    value = 'cannot travel that far'
  } else if (distance > 2000){
    value = 25
  }
    else if (400 <= distance <= 2000 ){
    value = (distance - 400) * .02 
  } 
  return value
}