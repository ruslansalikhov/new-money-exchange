// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // edge case
    if (currency > 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"}
    }

    let change = {};

    let coins = [[50, "H"], [25, "Q"], [10, "D"], [5, "N"], [1, "P"]];
    coins.sort((a,b) => a[0] - b[0]); // be sure that order is correct

    do {
        let [value, sym] = coins.pop();

        let quotient = Math.floor(currency / value);
        currency %= value;

        if (quotient > 0) change[sym] = quotient;
    } while (coins.length > 0 && currency > 0);

    return change;
}
