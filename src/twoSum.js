// Time Complexity: O(n), Space Complexity: O(n)
// arr = [2, 7, 11, 15], target = 9
const twoSum = (arr, target) => {
  const numsVisited = {}; // { 2: 0, 7: 1, 11: 2, 15: 3 }

  for (let i = 0; i < arr.length; i++) {
    const curr = arr[i];
    const lookupItem = target - curr;

    if (numsVisited[lookupItem] !== undefined) {
      return [i, numsVisited[lookupItem]];
    }

    numsVisited[curr] = i;
  }

  return [];
};

console.log(twoSum([2, 7, 11, 15], 9)); // [1, 0]
console.log(twoSum([2, 7, 11, 15], 3)); // []
