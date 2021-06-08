let obj = {};
obj.name = '班班开心';

console.log(obj.hasOwnProperty('name')); // 非继承 true
delete obj.name;
console.log(obj.hasOwnProperty('name')); // false

// 构造
function People(name) {
  this.name = name;
  this.say = function () {
    console.log(`我是网易${this.name}`);
  }
}

// 通过原型去继承
People.prototype.run = function () {
  console.log('跑步减肥去');
}

let pengyuyan = new People('彭于晏');
pengyuyan.say(); // 我是网易彭于晏
pengyuyan.run(); // 跑步减肥去

for (let i in pengyuyan) {
  console.log(i)
}
// say
// run
console.log(pengyuyan.hasOwnProperty('run')); // false, run 方法不是 pengyuyan 对象自身的属性，是通
console.log(pengyuyan.hasOwnProperty('say')); // true