function distanceFromHqInBlocks(num) {
    let headQuarters = 42;
    if (num > headQuarters) {
        return (num - headQuarters)
    };
    return (headQuarters - num)
}

function distanceFromHqInFeet(num) {
    let headQuarters = 42;
    let block = 264;
    if (num > headQuarters) {
        return (num - headQuarters)*block
    };
    return (headQuarters - num)*block
}

function distanceTravelledInFeet(num1, num2) {
    let block = 264;
    if (num2 > num1) {
        return (num2 - num1)*block
    };
    return (num1-num2)*block

}

function calculatesFarePrice(start, destination) {
     let total = distanceTravelledInFeet(start, destination);
     let cost = 0.02;
     if (total > 400 && total <= 2001) {
         return (total-400)*cost
        }
     else if (total > 2000 && total <= 2500) {
         return 25
        }
    else if (total >= 2500) {
        return 'cannot travel that far'
        };
    return 0
}


// Code your solution in this file!
