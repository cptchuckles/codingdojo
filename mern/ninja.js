class Ninja {
    /**
     * Creates a new Ninja object
     *
     * @param {string} name
     * @param {number} health
     * @param {number} speed
     * @param {number} strength
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
