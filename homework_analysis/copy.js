/**
 * 实现一个可以拷贝 Symbol、循环引用问题的拷贝函数
 * 并且保证 copy.test.js 中的单元测试顺利通过。
 */
const deepCopy = source => {

  const targetStack = []
  const baseStack = []

  const _clone = base => {
    if (typeof base !== 'object' || base == null) {
      return base
    }

    let target = {}
    if (Array.isArray(base)) {
      target = []
    }

    const index = baseStack.indexOf(base)

    if (index !== -1) {
      return targetStack[index]
    }

    baseStack.push(base)
    targetStack.push(target)

    for (let i in base) {
      target[i] = _clone(base[i])
    }

    return target
  }

  return _clone(source)
}

const ar = [1, 2, 3];

const y = {
  a: 'z',
  [Symbol('z')]: 'd',
  ar
};

const z = {
  a: 'z',
  z: () => 'd',
  y
};

var r = {
  a: 'z',
  z
};

r.r = r;

const res = deepCopy(r)
console.log(res)
// console.log('source',  r)
// console.log('res', res)

// res.z.z = 'xyz'
// console.log(res.z)
// console.log('origin', r.z)
// console.log(res.r.r.z)
// console.log('origin', r.r.r.z)
