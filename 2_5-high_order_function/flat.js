const arr = [1, 2, 3, 4, [5, 6, [7, 8, [9, 10, [11, 12]]]]]

// 拉平2层
const arr1 = arr.flat();
console.log(arr1);

// 拉平多层
const arr2 = arr.flat(3);
console.log(arr2);

// 全部拉平 - 未知层级时
const arr3 = arr.flat(Infinity);
console.log(arr3)