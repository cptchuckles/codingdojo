// String Matcher

// given a Target str: "riot"
// given a Search str: "Remind me to record the video"

// return the count of how many times Target can be created using the characters from Search
// Characters from search may be used in any order, but can not be used more than once.

const Target = "riot"
const Search = "Remind me to record the video"

const Output = 2

const strMatcher = (search, target) => {
    const getFreqs = (str) => {
        const freqs = {};
        for (let i=0; i<str.length; i++) {
            const c = str[i].toLowerCase();
            freqs[c] = (freqs[c] ?? 0) + 1;
        }
        return freqs;
    }

    const searchFreqs = getFreqs(search);
    const targetFreqs = getFreqs(target);

    let timesSpelled = Infinity;
    for (const c in targetFreqs) {
        const letterTimes = Math.floor((searchFreqs[c] ?? 0) / targetFreqs[c]);
        timesSpelled = Math.min(timesSpelled, letterTimes);
    }

    return timesSpelled;
}

console.log(strMatcher(Search, Target), "should be", Output);

// not case sensitive, Capital characters and lowercase characters count for the same character
// can this be done in O(n)?
