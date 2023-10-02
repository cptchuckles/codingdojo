function howMuchLeftOverCake(numberOfPieces, numberOfPeople) {
    const leftOvers = numberOfPieces % numberOfPeople;

    if (leftOvers > 5) {
        console.log("Hold another party!");
    }
    else if (leftOvers >= 3) /* 3-5 */ {
        console.log("You have leftovers to share");
    }
    else if (leftOvers > 0) /* 1-2 */ {
        console.log("You have some leftovers");
    }
    else {
        console.log("No leftovers for you!");
    }

    return leftOvers;
}

console.log(howMuchLeftOverCake(12, 5));
