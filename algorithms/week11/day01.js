/*          __                        __         
           /\ \                      /\ \        
 _ __    __\ \ \___      __      ____\ \ \___    
/\`'__\/'__`\ \  _ `\  /'__`\   /',__\\ \  _ `\  
\ \ \//\  __/\ \ \ \ \/\ \L\.\_/\__, `\\ \ \ \ \ 
 \ \_\\ \____\\ \_\ \_\ \__/.\_\/\____/ \ \_\ \_\
  \/_/ \/____/ \/_/\/_/\/__/\/_/\/___/   \/_/\/_/

    Given to a Coding Dojo alumni by Riot Games.
    Rehash an incorrectly hashed string by combining letter count occurrences
    and alphabetizing them.
*/

const str1 = "b70a164c32a20c10";
const expected1 = "a184b70c42";

function rehash(str) {
    const parts = str.match(/[a-z][0-9]+/g);
    const occurrences = {};
    for (const part of parts) {
        const letter = part[0];
        const number = Number(part.slice(1));
        occurrences[letter] = (occurrences[letter] ?? 0) + number;
    }
    return Object.keys(occurrences)
        .sort()
        .reduce((acc, k) => acc + k + occurrences[k], "");
}

console.log(rehash(str1), "should be", expected1);

// hints
// isNaN
// parseInt()
// someObj.hasOwnProperty("key")
