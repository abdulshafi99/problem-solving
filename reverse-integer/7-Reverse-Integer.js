/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let sign;
    if (x < 0) {
        sign = -1;
        x = -x
    } else {
        sign = 1;
    }

    let reversedX = Number(x.toString().split('').reverse().join('')) * sign;

    return (reversedX <= Math.pow(-2, 31) || reversedX  >= Math.pow(2, 31) - 1) ? 0 : reversedX;
};