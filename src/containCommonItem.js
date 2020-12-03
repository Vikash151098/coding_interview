/* 2 array
arr1=["a","b","c","x"]
arr2=["z","y","x"]

input- may be large
output- true/false

according to naive/brute force approach
O(n^2)

*/
const arr1 = ["a", "b", "c", "x"];
const arr2 = ["z", "y", "x"];
function containsCommonItem(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) return true;
    }
  }
  return false;
}

console.log(containsCommonItem(arr1, arr2));
