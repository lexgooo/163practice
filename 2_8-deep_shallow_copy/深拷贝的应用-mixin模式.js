const mixin = {
  say () {
    console.log(`${this.name}在说话`)
  },
  sing () {
    console.log(`${this.name}在唱歌`)
  },
  run () {
    console.log(`${this.name}在跑步`)
  }
}

// 没有任何方法
class Student {
  constructor(name) {
    this.name = name
  }
}

// 拷贝，通过集成去扩展方法
Object.assign(Student.prototype, mixin);
/**
 * 为什么把 mixin 挂在 protype 上面？
 * 因为这样做维护性好，可以减少内存占用。
 */

let student = new Student('王二柱');
student.run();