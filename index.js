function distanceFromHqInBlocks(streetNum) {
    let distance = streetNum - 42
    if (distance < 0) {
        distance *= -1
    }
    return distance
}

function distanceFromHqInFeet(streetNum) {
    return distanceFromHqInBlocks(streetNum) * 264
}

function distanceTravelledInFeet(start, end) {
    let distance = start - end
    if (distance < 0) {
        distance *= -1
    }
    return distance * 264
}

function calculatesFarePrice(start, destination) {
    let travelled = distanceTravelledInFeet(start, destination)
    if (travelled < 2500){
        if (travelled > 2000){
            return 25
        } else if (travelled < 400) {
            return 0
        } else{
            return (travelled - 400) * .02
        }
    } else {
        return 'cannot travel that far'
    }
}