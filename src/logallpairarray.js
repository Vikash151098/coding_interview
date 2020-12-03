const arrays = ["a", "b", "c", "d", "e"];

const star = ["*", "%", "$", "#", "&", "@"];

function logallboxesofarray(arrays) {
  //   for (let i = 0; i < arrays.length; i++) {
  //     for (let j = 0; j < arrays.length; j++) {
  //       console.log(arrays[i], arrays[j]);
  //     }
  //   }

  // ES5 syntax
  // arrays.forEach(function (firstbox) {
  //   arrays.forEach(function (secondbox) {
  //     console.log(firstbox, secondbox);
  //   });
  // });

  // ES6 syntax
  arrays.forEach((firstbox) => {
    arrays.forEach((secondbox) => {
      console.log(firstbox, secondbox);
    });
  });
}

logallboxesofarray(star); // O(N*N)

// O(n^2)
