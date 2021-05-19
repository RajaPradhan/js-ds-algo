// Time Complexity: O(n^2), Space Complexity: O(1)
const longestPalindromicSubstr = s => {
  let subStartIndex = 0;
  let subMaxLength = 0;

  const expandAroundCenter = (left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      const subLength = right - left + 1;

      if (subLength > subMaxLength) {
        subMaxLength = subLength;
        subStartIndex = left;
      }

      left -= 1;
      right += 1;
    }
  };

  for (let i = 0; i < s.length; i++) {
    expandAroundCenter(i - 1, i + 1); // character as center
    expandAroundCenter(i, i + 1); // space as center
  }

  return s.substring(subStartIndex, subStartIndex + subMaxLength);
};

console.log(longestPalindromicSubstr('babad'));
console.log(longestPalindromicSubstr('cbbd'));
