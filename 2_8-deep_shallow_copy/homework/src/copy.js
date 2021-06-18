/**
 * 深拷贝
 *
 * 缺陷: 比如拷贝Symbol、拷贝函数、循环引用
 */
const deepCopyJson = source => {
  return JSON.parse(JSON.stringify(source));
};

/**
 * 请试着实现一个可以解决 deepCopyJson 中不能拷贝的Symbol、循环引用问题的拷贝函数，
 * 并且保证copy.test.js中的单元测试顺利通过。
 */
const deepCopy = source => {
  let rst = Array.isArray(source) ? [] : {};
  if (source && typeof source === 'object') {
    for (let key in source) {
      if (source.hasOwnProperty(key)) {
        // console.log(key)
        if (source[key] && typeof source[key] === 'object') {
          rst[key] = deepCopy(source[key])
        } else {
          rst[key] = source[key]
        }
      }
    }
  }
  return rst
};

const sum = (a, b) => {
  return a + b
}

module.exports = {
  deepCopyJson,
  deepCopy,
  sum
}