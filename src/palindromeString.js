// Time Complexity: O(n), Space Complexity: O(n)
const isPalindrome1 = str => {
  str = str.toLowerCase().replace(/[\W_]/g, '');

  return (
    str ===
    str
      .split('')
      .reverse()
      .join('')
  );
};

// Time Complexity: O(n), Space Complexity: O(1) => i and j takes constant space
const isPalindrome2 = str => {
  str = str.toLowerCase().replace(/[\W_]/g, '');

  let i = 0;
  let j = str.length - 1;

  while (i < j) {
    if (str[i] !== str[j]) {
      return false;
    }

    i++;
    j--;
  }

  return true;
};

console.log(isPalindrome1('A man, a plan, a canal: Panama')); // true
console.log(isPalindrome1('race a car')); // false

console.log(isPalindrome2('A man, a plan, a canal: Panama')); // true
console.log(isPalindrome2('race a car')); // false

console.log(isPalindrome1('')); // true
console.log(isPalindrome2('')); // true
