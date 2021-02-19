module.exports = function reverse(n) {
    if (n < 0) {
        n = -n;
    }

    let stringNum = n.toString().split("").reverse().join("");
    let reversedStringNum = Number(stringNum);
    return reversedStringNum;
};
