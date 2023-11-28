class Ninja {
    /**
     * Creates a new Ninja object
     *
     * @param {string} name
     * @param {number} health Default 90
     * @param {number} speed Default 3
     * @param {number} strength Default 3
     */
    constructor(
        name,
        health = 90,
        speed = 3,
        strength = 3,
    ) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName() {
        console.log(this.name);
    }

    showStats() {
        console.log(
            `${this.name}:`,
            this.strength,
            this.speed,
            this.health,
        );
    }

    drinkSake() {
        this.health += 10;
    }
}

class Sensei extends Ninja {
    /**
     * Constructs a new Sensei object
     *
     * @param {string} name
     * @param {number} wisdom Default 10
     */
    constructor(name, wisdom = 10) {
        super(name, 200, 10, 10);
        this.wisdom = wisdom;
    }

    speakWisdom() {
        this.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }
}
