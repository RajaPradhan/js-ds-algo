const isAnagram = (s, t) => {
  if (s.length !== t.length) {
    return false;
  }

  const sCharCount = {}; // { H: 1, E: 1, L: 2, O: 1 }

  for (let i = 0; i < s.length; i++) {
    sCharCount[s[i]] = sCharCount[s[i]] + 1 || 1;
  }

  for (let j = 0; j < t.length; j++) {
    if (!sCharCount[t[j]]) {
      return false;
    } else {
      sCharCount[t[j]] -= 1;
    }
  }

  return true;
};

console.log(isAnagram('anagram', 'nagaram')); // true
console.log(isAnagram('rat', 'car')); // false
