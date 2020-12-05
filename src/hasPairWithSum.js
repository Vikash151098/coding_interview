// Google interview Question
// Google interview youtube link "https://www.youtube.com/watch?v=XKu_SEDAykw"

// Naive/brute force approach
function hasPairWithSum(arr, sum) {
  let len = arr.length;
  for (var i = 0; i < len - 1; i++) {
    for (var j = 0; j < len; j++) {
      if (arr[i] + arr[j] === sum) return true;
    }
  }
  return false;
}

// Better
function hasPairWithSum2(arr, sum) {
  const mySet = new Set();
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    if (mySet.has(arr[i])) {
      return true;
    }
    mySet.add(sum - arr[i]);
  }
  return false;
}

const result = hasPairWithSum2([1, 3, 5, 5, 7, 8], 6);
console.log(result);
