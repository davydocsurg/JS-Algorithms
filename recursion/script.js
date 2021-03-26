function countdown(y) {
  for (let i = y; i > 0; i--) {
    console.log(i);
  }
  console.log("Recursion");
}

function countDownRecursive(y) {
  if (y <= 0) {
    console.log("Recursion");
    return;
  }
  console.log(y);
  countDownRecursive(y - 1);
}

function sumRange(y) {
  let total = 0;
  for (let i = y; i > 0; i--) {
    total += 1;
  }
  return total;
}

function sumRangeRecursive(y, total = 0) {
  if (y <= 0) {
    return total;
  }
  return sumRangeRecursive(y - 1, total + y);
}

function printChildren(t) {}

function printChildrenRecursive(t) {
  if (t.children.length === 0) {
    return;
  }
  t.children.forEach((child) => {
    console.log(child.name);
    printChildrenRecursive(child);
  });
}

const tree = {
  name: "Tim",
  children: [
    { name: "Jim", children: [] },
    {
      name: "Xoxo",
      children: [
        { name: "Fred", children: [] },
        { name: "Sophia", children: [] },
      ],
    },
  ],
};
