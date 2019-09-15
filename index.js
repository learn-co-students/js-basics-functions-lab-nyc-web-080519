function distanceFromHqInBlocks(block) {
    if (block > 42) {
        return block - 42;
    } else {
        return 42 - block;
    }
}

function distanceFromHqInFeet(block) {
    return distanceFromHqInBlocks(block) * 264
}

function distanceTravelledInFeet(start, end) {
    if (start < end) {
        return (end - start) * 264;
    } else {
        return (start - end) * 264;
    }
}

function calculatesFarePrice(start, destrination) {
    const dist = distanceTravelledInFeet(start, destrination)

    if (dist <= 400) {
        return 0;
    } else if (dist > 400 && dist <= 2000) {
        return .02 * (dist - 400);
    } else if (dist > 2000 && dist < 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}