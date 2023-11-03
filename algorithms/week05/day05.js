{
    /* 
  Given a string that may have extra spaces at the start and the end,
  return a new string that has the extra spaces at the start and the end trimmed (removed)
  do not remove any other spaces.
*/

    const str1 = "   hello world     ";
    const expected1 = "hello world";

    const str2 = "             ";
    const expected2 = "";

    /**
 * Trims any leading or trailing white space from the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {string} The given string with any leading or trailing white space
 *    stripped.
 */
    function trim(str) {
        let start = 0;
        let end = str.length-1;
        while (true) {
            if (str[start] !== " " && str[end] !== " ") {
                break;
            }
            if (str[start] === " ") {
                start++;
            }
            if (str[end] === " ") {
                end--;
            }
        }
        return str.slice(start, end+1);
    }

    console.log(trim(str1), "should be", expected1);
    console.log(trim(str2), "should be", expected2);
    /*****************************************************************************/
}

{
    /* 
  An anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
  typically using all the original letters exactly once.

  Is there a quick way to determine if they aren't an anagram before spending more time?

  Given two strings
  return whether or not they are anagrams
*/

    const strA1 = "yes";
    const strB1 = "eys";
    const expected1 = true;

    const strA2 = "yes";
    const strB2 = "eYs";
    const expected2 = true;

    const strA3 = "no";
    const strB3 = "noo";
    const expected3 = false;

    const strA4 = "silent";
    const strB4 = "listen";
    const expected4 = true;

    const strA5 = "hello";
    const strB5 = "lelho";
    const expected5 = true;

    /**
 * Determines whether s1 and s2 are anagrams of each other.
 * Anagrams have all the same letters but in different orders.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean} Whether s1 and s2 are anagrams.
 */
    function isAnagram(s1, s2) {
        if (s1.length !== s2.length) {
            return false;
        }

        const freqs = {};
        for (let char of s1.toLowerCase()) {
            freqs[char] = (freqs[char] || 0) + 1;
        }

        for (let char of s2.toLowerCase()) {
            if (! char in freqs) {
                return false;
            }
            freqs[char] -= 1;
            if (freqs[char] < 0) {
                return false;
            }
        }

        for (const val of Object.values(freqs)) {
            if (val !== 0) {
                return false;
            }
        }

        return true;
    }

    function isAnagramEZ(s1, s2) {
        return s1.toLowerCase().split('').sort().join('') === s2.toLowerCase().split('').sort().join('');
    }

    console.log(isAnagram(strA1, strB1), "should be", expected1);
    console.log(isAnagram(strA2, strB2), "should be", expected2);
    console.log(isAnagram(strA3, strB3), "should be", expected3);
    console.log(isAnagram(strA4, strB4), "should be", expected4);
    console.log(isAnagram(strA5, strB5), "should be", expected5);
    console.log(isAnagramEZ(strA1, strB1), "(EZ) should be", expected1);
    console.log(isAnagramEZ(strA2, strB2), "(EZ) should be", expected2);
    console.log(isAnagramEZ(strA3, strB3), "(EZ) should be", expected3);
    console.log(isAnagramEZ(strA4, strB4), "(EZ) should be", expected4);
    console.log(isAnagramEZ(strA5, strB5), "(EZ) should be", expected5);
    /*****************************************************************************/
}
