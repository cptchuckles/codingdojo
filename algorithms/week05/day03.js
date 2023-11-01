{
    const str1 = "Y(3(p)p(3)r)s";
    const expected1 = true;

    const str2 = "N(0(p)3";
    const expected2 = false;
    // Explanation: not every parenthesis is closed.

    const str3 = "N(0)t ) 0(k";
    const expected3 = false;
    // Explanation: because the second ")" is premature: there is nothing open for it to close.

    const str4 = "a(b))(c";
    const expected4 = false;
    // Explanation: same number of opens and closes but the 2nd closing closes nothing.

    /**
 * Determines whether the parenthesis in the given string are valid.
 * Each opening parenthesis must have exactly one closing parenthesis.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {boolean} Whether the parenthesis are valid.
 */
    function parensValid(str) {
        let depth = 0;
        for (let c of str) {
            if (c === "(") {
                depth++;
            }
            else if (c === ")") {
                depth--;
                if (depth < 0) {
                    return false;
                }
            }
        }
        return depth === 0;
    }

    console.log(parensValid(str1), "should be", expected1);
    console.log(parensValid(str2), "should be", expected2);
    console.log(parensValid(str3), "should be", expected3);
    console.log(parensValid(str4), "should be", expected4);
}

{
    const str1 = "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!";
    const expected1 = true;

    const str2 = "D(i{a}l[ t]o)n{e";
    const expected2 = false;

    const str3 = "A(1)s[O (n]0{t) 0}k";
    const expected3 = false;

    function bracesValid(str) {
        const braceTypes = {
            "}": "{",
            "]": "[",
            ")": "(",
        };

        const stack = [];

        for (let c of str) {
            if (Object.values(braceTypes).includes(c)) {
                stack.push(c);
            }
            else if (c in braceTypes) {
                if (stack.pop() !== braceTypes[c]) {
                    return false;
                }
            }
        }

        return stack.length === 0;
    }

    console.log(bracesValid(str1), "should be", expected1);
    console.log(bracesValid(str2), "should be", expected2);
    console.log(bracesValid(str3), "should be", expected3);
}
