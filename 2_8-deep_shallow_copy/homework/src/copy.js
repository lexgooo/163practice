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
  const baseStack = []
  const targetStack = []
  const _clone = base => {
    if (typeof base !== 'object' || base == null) {
      return base
    }

    let target = {}

    if (Array.isArray(base)) {
      target = []
    }

    const index = baseStack.indexOf(base)

    if (index > -1) {
      return targetStack[index]
    }

    baseStack.push(base)
    targetStack.push(target)

    for(let i in base) {
      target[i] = _clone(base[i])
    }

    return target
  }
  return _clone(source)
};

const sum = (a, b) => {
  return a + b
}

module.exports = {
  deepCopyJson,
  deepCopy,
  sum
}