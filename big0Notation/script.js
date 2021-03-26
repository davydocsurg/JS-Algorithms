const data = ["A", "B", "C"];
const out = [];

for (let i = 0; i < data.length; i++) {
  out[i] = [];
  for (let j = 0; j < data.length; j++) {
    out[i][j] = data[i];
  }
}
O(n ^ 2);

//
const data = ["A", "B", "C"];
const data2 = [1, 2, 3, 4, 5];
for (let j = 0; j < data2.length; j++) {
  for (let i = 0; i < data.length; i++) {
    console.log(data[i] + data2[j]);
  }
}
