function greet(name, hour = 12) {
    if (name === "Count Dooku") {
        console.log("I'm coming for you, Dooku!");
        return;
    }

    let time = "whatever";

    hour %= 24;
    if (hour < 0) hour += 24;

    if (4 < hour && hour < 10) {
        time = "morning";
    }
    else if (10 < hour && hour < 16) {
        time = "day";
    }
    else if(16 < hour && hour < 19) {
        time = "afternoon";
    }
    else if (19 < hour && hour < 22) {
        time = "evening";
    }
    else if (hour < 4 || 22 < hour) {
        time = "night";
    }

    console.log(`Good ${time}, ${name}!`);
}
