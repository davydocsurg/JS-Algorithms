// const prevVals = [];

// function square(n) {
//   if (prevVals[n] != null) {
//     return prevVals[n];
//   }
//   let result = 0;
//   for (let x = 1; x <= n; x++) {
//     for (let y = 1; y <= n; y++) {
//       result += 1;
//     }
//   }
//   prevVals[n] = result;
//   return result;
// }

// console.log(square(20000));
// console.log(square(20000));
// console.log(square(20000));
// console.log(square(20000));
// console.log(square(20000));

function fib(x, prevVals = []) {
  if (prevVals[x] != null) {
    return prevVals[x];
  }

  let result;
  if (x <= 2) {
    result = 1;
  } else {
    result = fib(x - 1, prevVals) + fib(x - 2, prevVals);
  }
  prevVals[x] = result;
  return result;
}

console.log(fib(500));

// (1-1)+(1-2)
