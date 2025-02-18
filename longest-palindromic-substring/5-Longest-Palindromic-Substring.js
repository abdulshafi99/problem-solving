/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let sub;
    palindrome = []
    for (let i = 0; i < s.length; i++) {
        sub = [s[i]];
        if (isPalindromic(sub) && sub.length > palindrome.length) {
                palindrome = [...sub];
            }
        for (let j = i+1; j < s.length; j++) {
            sub.push(s[j]);
            if (isPalindromic(sub) && sub.length > palindrome.length) {
                palindrome = [...sub];
            }
        }
    }

    return palindrome.join('');
};


/**
 * @param {string[]} s
 * @return {boolean}
 */
 var isPalindromic = function(s) {
    for (let i = 0, j = s.length - 1; i < j; i++, j--) {
        if (s[i] !== s[j]) {
            return false;
        }
    }

    return true;
 }