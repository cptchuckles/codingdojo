/*
  Create a function to determine the max amount of
  servings that can be made based on a recipe and
  available ingredients.

  Input:
    - recipe object where keys are ingredient names
      and values are unit required (int)
    - available ingredients object where keys are ingredient
      names and values are unit available (int)

  Output:
    - int (max servings)

  Side note (super extra challenge version): Realistically, the values
  would be an object as well with the keys: unit (unit of measure), and amount.
  If the available ingredient was stored in a different unit,
  a conversion table would be needed to convert units of measure.
*/

// Example Input
const recipe = {
    "organic fat": 99,
    "live squid": 1,
    "birds nest": 1,
    "fried flesh": 1,
    "spicy": 5,
    "gourmet memes": 4200
};

const available = {
    "organic fat": 990,
    "birds nest": 10,
    "live squid": 1,
    "fried flesh": 10,
    "spicy": 50,
    "gourmet memes": 42000,
    "sugar": 9001,
    "spice": 5,
    "everything nice": 1,
};

// Output: 1 because only 1 live squid is available
// Output: 10 IF we had 10 live squids because then we have 10x of every ingredient
// Output: 0 IF we had 0 live squids or live squids key didn't exist in 'available'

function getMaxServings(recipe, ingredients) {
    let limit = undefined;
    for (const key in recipe) {
        const needed = recipe[key];
        const onHand = ingredients[key] ?? 0;
        limit = Math.min(limit ?? Infinity, Math.floor(onHand / needed));
    }
    return limit;
}

function getMaxServingsNested(recipe, ingredients) {
    let limit = undefined;
    for (const key in recipe) {
        const needed = recipe[key];
        if (typeof needed === 'number') {
            const onHand = ingredients[key] ?? 0;
            limit = Math.min(limit ?? Infinity, Math.floor(onHand / needed));
        }
        else {
            limit = Math.min(limit ?? Infinity, getMaxServingsNested(needed, ingredients[key] ?? {}));
        }
    }
    return limit;
}

console.log(getMaxServings(recipe, available));

const recipe2 = {
    stuff: recipe,
};

const available2 = {
    stuff: available,
};

console.log(getMaxServingsNested(recipe2, available2));
