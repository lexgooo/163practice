// var s = 'ABC';
// s.toLowerCase();
// console.log(s); // 'ABC'

// Object.prototype.valueOf = function () {
//   return 12;
// }

// Object.prototype.toString = function () {
//   return 'abc';
// }

// console.log(String({x: 1, y: 2}));
// console.log('' + ({ x: 1, y: 2 }));

// Date.prototype.valueOf = function () {
//   return '123';
// }

// Date.prototype.toString = function () {
//   return 'abc';
// }

// let d = new Date()
// console.log(String(d))
// console.log('' + d);

var o = {x: 1, y: 2};
console.log(Number(o));
console.log(+o);
