/* 
  Recursively find the lowest common multiple between two numbers

  "A common multiple is a number that is a multiple of two or more integers. 
  The common multiples of 3 and 4 are 0, 12, 24, .... 
  The least common multiple (LCM) of two numbers is the smallest
  number (not zero) that is a multiple of both."
  
  Try writing two columns of multiples as a starting point:
  starting with 15 and 25 and keep writing their multiples until you find the
  lowest common one then turn this in to a step by step instruction

  15 25
  30 50
  45 75
  60 
  75

  75 is the first common
*/

const num1A = 1;
const num1B = 1;
const expected1 = 1;

const num2A = 5;
const num2B = 10;
const expected2 = 10;

const num3A = 10;
const num3B = 5;
const expected3 = 10;

const num4A = 6;
const num4B = 8;
const expected4 = 24;

const num5A = 15;
const num5B = 25;
const expected5 = 75;

/**
 * Add params if needed for recursion
 * Finds the lowest common multiple of the two given ints.
 * @param {number} a
 * @param {number} b
 * @param {number} x The coefficient for a
 * @param {number} b The coefficient for b
 * @returns {number} The lowest common multiple of the given ints.
 */
/* Do you guys know gzip? */
/* H4sIANyUV2UAA0srzUsuyczPU8jJL08tLnHOz83Nz/MtzSnJLMhJ1UjUUUjSUaiwNdRRqLQ11FSo
5lIAgsw0BY1ErQoFW1tbhSStSpgwCBSllpQW5SkAZa3BYrUoGmxwKMdntzbIbk1k01JzilNJMwNo
grYh3IxaLgCqveRA9QAAAA== */

console.log(lowestCommonMultiple(num1A, num1B), "should be", expected1);
console.log(lowestCommonMultiple(num2A, num2B), "should be", expected2);
console.log(lowestCommonMultiple(num3A, num3B), "should be", expected3);
console.log(lowestCommonMultiple(num4A, num4B), "should be", expected4);
console.log(lowestCommonMultiple(num5A, num5B), "should be", expected5);

/*****************************************************************************/
