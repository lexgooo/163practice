(function() {
  // 基础架构
  var root = this;
  var _ = {};
  root._ = _;

  // 定义自己的方法
  _.reverse = string => {
    return string.split('').reverse().join('')
  }
})()

let a = _.reverse('hello');
console.log(a);