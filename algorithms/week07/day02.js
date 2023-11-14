{
    /* 
  Recursive Factorial

  Input: integer
  Output: integer, product of ints from 1 up to given integer

  If less than zero, treat as zero.
  Bonus: If not integer, truncate (remove decimals).

  Experts tell us 0! is 1.

  rFact(3) = 6 (1*2*3)
  rFact(6.8) = 720 (1*2*3*4*5*6)
*/

    const num1 = 3;
    const expected1 = 6;
    // Explanation: 1*2*3 = 6

    const num2 = 6.8;
    const expected2 = 720;
    // Explanation: 1*2*3*4*5*6 = 720

    const num3 = 0;
    const expected3 = 1;

    /**
 * Recursively multiples 1 to the given int.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} n The int to factorial. Treat negatives as zero and
 *    floor decimals.
 * @returns {number} The result of !n.
 */
    function factorial(n) {
        n = Math.floor(n);
        if (n <= 0) {
            return 1;
        }
        return n * factorial(n-1);
    }

    console.log(factorial(num1), "should be", expected1);
    console.log(factorial(num2), "should be", expected2);
    console.log(factorial(num3), "should be", expected3);

    /*****************************************************************************/
}

{
    /* 
  Return the fibonacci number at the nth position, recursively.

  Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

  The next number is found by adding up the two numbers before it,
  starting with 0 and 1 as the first two numbers of the sequence.
*/

    const num1 = 0;
    const expected1 = 0;

    const num2 = 1;
    const expected2 = 1;

    const num3 = 2;
    const expected3 = 1;

    const num4 = 3;
    const expected4 = 2;

    const num5 = 4;
    const expected5 = 3;

    const num6 = 8;
    const expected6 = 21;

    /**
 * Recursively finds the nth number in the fibonacci sequence.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} num The position of the desired number in the fibonacci sequence.
 * @returns {number} The fibonacci number at the given position.
 */
    memo = {}
    function fibonacci(num) {
        if (num in memo) {
            return memo[num];
        }
        let result = 0;
        if (0 < num && num <= 2) {
            result = 1;
        }
        else if (num > 0) {
            result = fibonacci(num-1) + fibonacci(num-2);
        }
        memo[num] = result;
        return result;
    }

    function dynamicFibonacci(num) {
        const memo = {};
        for (let i=0; i<=num; i++) {
            let result = 0;
            if (0 < i && i <= 2) {
                result = 1;
            }
            else if (i > 0) {
                result = memo[i-1] + memo[i-2];
            }
            memo[i] = result;
        }
        return memo[num];
    }

    function arrayFibonacci(num) {
        const fib = [0, 1];
        while (fib.length <= num) {
            fib.push(fib[fib.length-1] + fib[fib.length-2]);
        }
        return fib[num];
    }

    function constantFibonacci(num) {
        let current = 0, next = 1;
        while (num-- > 0) {
            next += current;
            current = next - current;
        }
        return current;
    }

    console.log(fibonacci(num1), "should be", expected1);
    console.log(fibonacci(num2), "should be", expected2);
    console.log(fibonacci(num3), "should be", expected3);
    console.log(fibonacci(num4), "should be", expected4);
    console.log(fibonacci(num5), "should be", expected5);
    console.log(fibonacci(num6), "should be", expected6);
    console.log(fibonacci(50), "should not take forever")
    /*****************************************************************************/
}
