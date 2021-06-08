// Object.assign 可以把 n 个源对象拷贝到目标对象中去

/**
 * es6 中的方法
 * Object.assign 是深拷贝还是浅拷贝
 */

let kaixin = {
  name: '开心',
  info: {
    gender: '女',
    hobby: '吃饭睡觉打豆豆'
  }
}

// 第一级属性是深拷贝，以后级别是浅拷贝
/**
 * 【存疑】这里老师的理解的浅拷贝就是引用地址的复制，而深拷贝是对象内容的完整复制；
 * 我的理解可能就没有这么绕，因为我的理解是基于结果判断的，不管你用什么方法去复制，只要结果中没有任何对象或属性与原对象有引用地址的关联，那就说这个新对象就是深拷贝过来的，如果有任何一个对象或属性与原对象中的对象或属性在引用地址上有关联，那都是浅拷贝。一言以蔽之：深拷贝就是完整复制，浅拷贝就是不完整复制。不用拆分每个层级去看判断，我觉得没必要把问题弄得这么复杂。
 */
let lincancan = Object.assign({}, kaixin);
console.log(lincancan);

lincancan.name = '林灿灿';
console.log(kaixin.name); // 开心
lincancan.info.hobby = '吃猪扒';
console.log(kaixin.info.hobby); // 吃猪扒