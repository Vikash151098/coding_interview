/* 2 array
arr1=["a","b","c","x"]
arr2=["z","y","x"]

input- may be large
output- true/false

according to naive/brute force approach
O(n^2)

*/
// const arr1 = ["a", "b", "c", "x"];
// const arr2 = ["z", "y", "x"];

// function containsCommonItem(arr1, arr2) {
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] === arr2[j]) return true;
//     }
//   }
//   return false;
// }

// console.log(containsCommonItem(arr1, arr2)); // O(a*b) where a is length of arr1 and b is length of arr2

const arr1 = [1, 2, "[", 5, 6];
const arr2 = ["0", "a", "c", "{"];

function containsCommonItems2(arr1, arr2) {
  //loop through first array
  // where properties= item in the array
  let map = {};
  for (let i = 0; i < arr1.length; i++) {
    if (!map[arr1[i]]) map[arr1[i]] = true;
  }
  // loop through second array and check if item in second array item exist on created object
  for (let j = 0; j < arr2.length; j++) {
    if (map[arr2[j]]) return true;
  }
  return false;
}

const result = containsCommonItems2(arr1, arr2); // O(a+b) where a is length of arr1 and b is length of arr2
console.log(result);
