let obj = {
  name: '小明',
  dog: ['小花', '旺财']
}

let obj1 = JSON.parse(JSON.stringify(obj));
obj1.name = '小华';
obj1.dog[0] = '小白';
console.log(obj1, obj); // { name: '小华', dog: [ '小白', '旺财' ] } { name: '小明', dog: [ '小花', '旺财' ] }
/**
 * obj 和 obj1 两个对象互相不影响，实现了深拷贝
 */

let richGirl = [{
  name: '开心',
  car: ['宝马', '奔驰', '保时捷'],
  drive: function () {},
  age: undefined
}]

let richBoy = JSON.parse(JSON.stringify(richGirl));
console.log(richBoy); // [ { name: '开心', car: [ '宝马', '奔驰', '保时捷' ] } ]
/**
 * 从结果可以发现 函数 drive 和 undefined 的 age 没有了。
 * JSON.stringify 不能把 函数 undefined 这些数据 JSON 化。
 * 弄清楚哪些数据类型不能 json 化
 */
/**
 * 可使用 json 方法来进行深拷贝的数据限制：
 * 1. 纯的 JSON 数据
 * 2. 不包含循环引用
 */