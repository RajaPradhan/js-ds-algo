// Time Complexity: O(n), Space Complexity: O(n)
const isValidParentheses = s => {
  const stack = [];
  const pairsMap = { '{': '}', '[': ']', '(': ')' };

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (pairsMap[char]) {
      stack.push(char);
    } else if (char !== pairsMap[stack.pop()]) {
      return false;
    }
  }

  return stack.length === 0;
};

console.log(isValidParentheses('()')); // true
console.log(isValidParentheses('()[]{}')); // true
console.log(isValidParentheses('()[]{}{')); // false
