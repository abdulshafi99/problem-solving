/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let len = 0, sub;
  for (let i = 0; i < s.length; i++) {
    sub = [s[i]];
    for (let j = i + 1; j < s.length; j++) {
        if (sub.indexOf(s[j]) >= 0) {
            break;
        } else {
            sub.push(s[j]);
        }
    }
    if (sub.length > len) {
        len = sub.length;
    }
  }  

  return len;
};