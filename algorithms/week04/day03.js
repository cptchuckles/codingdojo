{
  /* 
  Given in an alumni interview in 2021.

  String Encode

  You are given a string that may contain sequences of consecutive characters.
  Create a function to shorten a string by including the character,
  then the number of times it appears. 


  If final result is not shorter (such as "bb" => "b2" ),
  return the original string.
  */

  const str1 = "aaaabbcddd";
  const expected1 = "a4b2c1d3";

  const str2 = "";
  const expected2 = "";

  const str3 = "a";
  const expected3 = "a";

  const str4 = "bbcc";
  const expected4 = "bbcc";

  const str5 = "aaaabbcdddaaaa";
  // const expected5 = "a8b2c1d3";
  const expected5 = "a4b2c1d3a4";

  /**
   * Encodes the given string such that duplicate characters appear once followed
   * by a number representing how many times the char occurs. Only encode strings
   * when the result yields a shorter length.
   * - Time: O(?).
   * - Space: O(?).
   * @param {string} str The string to encode.
   * @returns {string} The given string encoded.
   */
  function encodeStr(str) {
    var current = ""
    var count = 0
    var result = ""
    for (var i = 0; i < str.length;i++){
      if(current != str[i]){
        if (count > 0){
          result += String(count)
        }
        result += str[i]
        current = str[i]
        count = 1
      }
      else{
        count += 1
      }
    }
    if (count > 0){
      result += String(count)
    }
    if (result.length < str.length){
      return result
    }
    else{
      return str
    }
  }
  console.log(encodeStr(str1), "should be", expected1);
  console.log(encodeStr(str2), "should be", expected2);
  console.log(encodeStr(str3), "should be", expected3);
  console.log(encodeStr(str4), "should be", expected4);
  console.log(encodeStr(str5), "should be", expected5);

  /*****************************************************************************/
}

{
  /* 
  String Decode  
*/

  const str1 = "a3b2c1d3";
  const expected1 = "aaabbcddd";

  const str2 = "a3b2c12d10";
  const expected2 = "aaabbccccccccccccdddddddddd";

  /**
 * Decodes the given string by duplicating each character by the following int
 * amount if there is an int after the character.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str An encoded string with characters that may have an int
 *    after indicating how many times the character occurs.
 * @returns {string} The given str decoded / expanded.
 */
  function decodeStr(str) {
    let result = "";
    for (const match of str.matchAll(/([a-z])(\d*)/g)) {
      const letter = match[1];
      const number = match[2];
      result += letter.repeat(Number(number) || 1);
    }
    return result;
  }

  console.log(decodeStr(str1), "should be", expected1);
  console.log(decodeStr(str2), "should be", expected2);

  /*****************************************************************************/
}
