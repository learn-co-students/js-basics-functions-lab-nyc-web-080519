function distanceFromHqInBlocks(num) {
    if (num >= 42) {
        return (num - 42);
    }
    else {
        return (42 - num);
    }
}

function distanceFromHqInFeet(num) {
    return distanceFromHqInBlocks(num) * 264;
}

function distanceTravelledInFeet(num1, num2) {
    return Math.abs(num1 - num2) * 264;
}

function calculatesFarePrice(num1, num2) {
    let distance = distanceTravelledInFeet(num1, num2);
    let price;
    if (distance >= 400 && distance <= 2000) {
       price = (distance - 400) * 0.02;
    }
    else if (distance > 2000 && distance <= 2500) {
       price = 25;
    }
    else if (distance > 2500) {
       price = "cannot travel that far";
    }
    else {
        price = 0
    }

    return price;
}