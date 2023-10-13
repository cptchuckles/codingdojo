// THIS IS A FUNCTION
class Pizza {
    constructor(crustType, sauceType, cheeses, toppings) {
        this.crustType = crustType;
        this.sauceType = sauceType;
        this.cheeses = cheeses;
        this.toppings = toppings;
    }
}

let meatLovers = new Pizza("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
let vegetable = new Pizza("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
let hawaiian = new Pizza("hand tossed", "traditional", ["mozzarella"], ["pineapple", "barbecue chicken"]);
let classicCheese = new Pizza("thin crust", "traditional", ["mozzarella"], []);

console.log(meatLovers);
console.log(vegetable);
console.log(hawaiian);
console.log(classicCheese);
