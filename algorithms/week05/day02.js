{
  /* 
  Given a string,
  return a new string with the duplicates excluded

  Bonus: Keep only the last instance of each character.
*/

  const str1 = "abcABC";
  const expected1 = "abcABC";

  const str2 = "helloo";
  const expected2 = "helo";

  const str3 = "";
  const expected3 = "";

  const str4 = "aa";
  const expected4 = "a";

  const str5 = "aabcb";
  const expected5 = "abc";
  const expected5_bonus = "acb";


  /**
 * De-dupes the given string.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str A string that may contain duplicates.
 * @returns {string} The given string with any duplicate characters removed.
 */
  function stringDedupe(str) {
    const seen = {};
    const uniques = [];
    for (let i=str.length-1; i>=0; i--) {
      const c = str[i];
      if (c in seen) {
        continue;
      }
      seen[c] = true;
      uniques.push(c);
    }
    return uniques.reverse().join('');
  }

  console.log(stringDedupe(str1), "should be", expected1);
  console.log(stringDedupe(str2), "should be", expected2);
  console.log(stringDedupe(str3), "should be", expected3);
  console.log(stringDedupe(str4), "should be", expected4);
  console.log(stringDedupe(str5), "should be", expected5_bonus);

  /*****************************************************************************/
}

{
  /* 
  Given a string containing space separated words
  Reverse each word in the string.

  If you need to, use .split to start, then try to do it without.
*/

  const str1 = "hello";
  const expected1 = "olleh";

  const str2 = "hello world";
  const expected2 = "olleh dlrow";

  const str3 = "abc def ghi";
  const expected3 = "cba fed ihg";

  /**
 * Reverses the letters in each words in the given space separated
 * string of words. Does NOT reverse the order of the words themselves.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str Contains space separated words.
 * @returns {string} The given string with each word's letters reversed.
 */
  function reverseWords(str) {
    // split the string on space ' '
    const words = str.split(' ');
    // reverse each word
    for (let i=0; i<words.length; i++) {
      // split on empty string to get characters
      let word = words[i].split('');
      word = word.reverse();
      // join on empty string to make it a string again
      words[i] = word.join('');
    }
    // join words back together in order
    // return it
    return words.join(' ');


    // return str.split(' ').map(w => w.split('').reverse().join('')).join(' ');
  }

  console.log(reverseWords(str1), "should be", expected1);
  console.log(reverseWords(str2), "should be", expected2);
  console.log(reverseWords(str3), "should be", expected3);

  /*****************************************************************************/
}
