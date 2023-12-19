// String Matcher

// given a Target str: "riot"
// given a Search str: "Remind me to record the video"

// return the count of how many times Target can be created using the characters from Search
// Characters from search may be used in any order, but can not be used more than once.

const Target = "riot"
const Search = "Remind me to record the video"

const Output = 2

const strMatcher = (search, target) => {
    const freqs = {};
    for (let i=0; i<search.length; i++) {
        const c = search[i].toLowerCase();
        freqs[c] = (freqs[c] ?? 0) + 1;
    }

    let times = Infinity;
    for (let i=0; i<target.length; i++) {
        const c = target[i].toLowerCase();
        times = Math.min(times, freqs[c] ?? 0);
    }

    return times;
}

console.log(strMatcher(Search, Target), "should be", Output);

// not case sensitive, Capital characters and lowercase characters count for the same character
// can this be done in O(n)?
