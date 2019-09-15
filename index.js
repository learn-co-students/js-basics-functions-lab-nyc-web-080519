// Code your solution in this file!
function distanceFromHqInBlocks(location) {
    return Math.abs(42 - location);
}

function distanceFromHqInFeet(location) {
    return distanceFromHqInBlocks(location) * 264;
}

function distanceTravelledInFeet(a, b) {
    return Math.abs(a - b) * 264;
}

function calculatesFarePrice(a, b) {
    let distance = distanceTravelledInFeet(a, b);
    switch (true) {
        case distance > 2500:
            return 'cannot travel that far';
        case distance > 2000:
            return 25;
        case distance > 400:
            return (distance - 400) * 0.02;
        case distance <= 400:
            return 0;
    }
}