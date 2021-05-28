// 【需求】创建一个新数组，其中的值是原数组的值的两倍
const arr1 = [1, 2, 3, 4];

// 常规实现
const arr2 = [];
for(let i = 0; i < arr1.length; i++) {
  arr2.push(arr[i] * 2);
}
console.log(arr2);

// 高阶函数实现
const arr3 = arr1.map(function (item, index, arr) {
  // console.log(item, index, arr)
  return item * 2
});
console.log(arr3);

// 高阶函数+箭头函数实现
const arr4 = arr1.map(item => item * 2);