function booooo(arrays) {
  for (let i = 0; i < arrays.length; i++) {
    console.log("booooo");
  }
}

booooo([1, 2, 3, 4, 5]);

function arrayofHiNTimes(n) {
  let hiArray = [];
  for (let i = 0; i < n; i++) {
    hiArray[i] = "hi";
  }
  return hiArray;
}
console.log(arrayofHiNTimes(6));
