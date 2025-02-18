/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    let digits = parseDigits(x);
    for (let i = 0, j = digits.length - 1; i < j; i++, j--) {
        if (digits[i] !== digits[j]) {
            return false;
        }
    }

    return true;
};


/**
 * @param {number} x
 * @return {number[]}
 */
var parseDigits = function (number) {
    return number.toString().split('');
}