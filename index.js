function distanceFromHqInBlocks(location) {
    switch (true) {
        case location < 42:
            return 42 - location;
            break;
        default:
            return location - 42;
            break;
    }
}

function distanceFromHqInFeet(location) {
    let distance = distanceFromHqInBlocks(location);
    return distance * 264;
}

function distanceTravelledInFeet(start, end) {
    let distance = 0;
    switch (true) {
        case start < end:
            distance = end - start;
            break;
        default:
            distance = start - end;
            break;
    }
    return distance * 264;
}

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);
    switch (true) {
        case distance <= 400:
            return 0;
            break;
        case distance > 400 && distance <= 2000:
            return (distance - 400) * 0.02;
            break;
        case distance > 2000 && distance <= 2500:
            return 25;
            break;
        default:
            return 'cannot travel that far';
            break;
    }
}