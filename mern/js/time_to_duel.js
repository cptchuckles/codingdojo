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

class Effect extends Card {
    /**
     * Create a new instance of an Effect card.
     *
     * @constructor
     * @param {string} name
     * @param {number} cost
     * @param {string} stat The stat of the target Unit to affect
     * @param {number} magnitude How to affect the target Unit's specified stat
     */
    constructor(name, cost, stat, magnitude) {
        super(name, cost);
        this.stat = stat;
        this.magnitude = magnitude;

        this.text = `${magnitude > 0 ? "Raise" : "Lower"} the target's ${stat} by ${magnitude}`;
    }

    /**
     * Play this Effect card on a Unit
     *
     * @param {Unit} target
     * @throws when target is not a Unit
     * @throws when this Effect's stat is not a property of Unit
     */
    play(target) {
        if (!(target instanceof Unit)) {
            throw new Error("Target is not a Unit");
        }
        if (! this.stat in target) {
            throw new Error(`Unit does not have a stat '${this.stat}'`);
        }
        target[this.stat] += this.magnitude;
    }
}

const redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
const blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);

const hardAlgorithm = new Effect("Hard Algorithm", 2, "resilience", 3);
hardAlgorithm.play(redBeltNinja);

const unhandledPromiseRejection = new Effect("Unhandled Promise Rejection", 1, "resilience", -2);
unhandledPromiseRejection.play(redBeltNinja);

const pairProgramming = new Effect("Pair Programming", 3, "power", 2);
pairProgramming.play(redBeltNinja);

redBeltNinja.attack(blackBeltNinja);
