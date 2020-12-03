const { performance } = require("perf_hooks");
const nemo = ["nemo"];
const everyone = ["raju", "pawan", "nemo", "vikash", "aman", "banty"];
const large = new Array(10000).fill("nemo");

function findNemo(array) {
  let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("NEMO FOUND");
      break;
    }
  }
  let t1 = performance.now();
  console.log("call to find Nemo took " + (t1 - t0) + " milliseconds");
}

findNemo(everyone);

const findNemo2 = (array) => {
  array.forEach((item) => {
    if (item === "nemo") {
      console.log("Nemo Found!");
      return;
    }
  });
};

const findNemo3 = (array) => {
  for (let item of array) {
    if (item === "nemo") {
      console.log("Nemo Found!");
      break;
    }
  }
};

findNemo2(everyone);
findNemo3(everyone);
