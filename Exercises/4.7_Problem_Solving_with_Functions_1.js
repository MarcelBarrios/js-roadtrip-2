// Video 4.6 accompanies this exercise

// The oceanologists in Miami Beach divide up the feed
// responsibilities daily for the Goldfish population. Each goldfish needs
// 2 grams of fish feed per day.
//
// Build a function called feedPerOceanologist that takes in:
//
//  - The current population of goldfish.
//  - The number of oceanologists available during the day.
//
// The function should alert the amount of feed that each oceanologist should
// be responsible for on that day. The output should match the following format:
//
//      "Each Oceanologist should load <number> grams of feed today."

function feedPerOceanologist(populationOfGoldfish, numOfOcean){
    const b = (populationOfGoldfish*2) / numOfOcean

    return `Each Oceanologist should load ${b} grams of feed today.`
}

console.log(feedPerOceanologist(1000,10));
console.log(feedPerOceanologist(10059850,1058));
