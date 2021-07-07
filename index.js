// Code your solution in this file!
function distanceFromHqInBlocks(num){
    if (num > 42){
        return num - 42;
    }
    else{
        return 42 - num; 
    }
}

function distanceFromHqInFeet(num){
    return distanceFromHqInBlocks(num) * 264;
}

function distanceTravelledInFeet(start, end) {
    if (start < end) {
        return (end - start) * 264;
    } else {
        return (start - end) * 264;
    }
}

function calculatesFarePrice(start, end) {
    const dist = distanceTravelledInFeet(start, end);

    if (dist <= 400) {
        return 0;
    } else if (dist > 400 && dist < 2000) {
        return (dist - 400) * 0.02;
    } else if (dist > 2000 && dist < 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}