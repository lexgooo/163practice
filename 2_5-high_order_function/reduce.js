let arr = [1, 2, 3, 4, 5];
const sum = arr.reduce((prev, cur) => prev + cur, 0);
console.log(sum);

const arr1 = [1, 2, 3, 4, 4, 5, 5, 1, 1, 2, 3, 2, 3, 2, 2, 3, 4, 5, 6, 6, 7];
const newArr = arr1.reduce((prev, cur) => {
  prev.indexOf(cur) === -1 && prev.push(cur);
  return prev;
}, []);
console.log(newArr);