class Card {
    /**
     * Creates an instance of a Card
     *
     * @constructor
     * @param {string} name
     * @param {number} cost
     */
    constructor (name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    /**
     * Creates an instance of a Unit card.
     *
     * @constructor
     * @param {string} name
     * @param {number} cost
     * @param {number} power
     * @param {number} resilience
     */
    constructor(name, cost, power, resilience) {
        super(name, cost)
        this.power = power;
        this.resilience = resilience;
    }

    /**
     * Attack a target Unit
     *
     * @param {Unit} target
     * @throws {Error} when target is not a Unit instance
     */
    attack(target) {
        if (!(target instanceof Unit)) {
            throw new Error("Target must be a Unit!");
        }
        target.resilience -= this.power;
    }
}
