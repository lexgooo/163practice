class Commitment {
  static PADDING = 'padding';
  static FULFILLED = 'fulfilled';
  static REJECTED = 'rejected';

  constructor (fn) {
    this.status = Commitment.PADDING
    this.result = null
    this.resolveCallbacks = []
    this.rejectCallbacks = []
    fn(this.resolve.bind(this), this.reject.bind(this))
  }
  
  resolve (res) {
    if (this.status !== Commitment.PADDING) return
    this.status = Commitment.FULFILLED
    this.result = res
    this.resolveCallbacks.forEach(cb => { 
      cb(res)
    })
  }
  
  reject (r) {
    if (this.status !== Commitment.PADDING) return
    this.status = Commitment.REJECTED
    this.result = r
    this.rejectCallbacks.forEach(cb => cb(r))
  }

  _onFulfilled (onFulfilled, promise2, resolve, reject, stack = false) {
    const that = this
    try {
      if (typeof onFulfilled !== 'function') {
        resolve(that.result)
      } else {
        let x = null
        x = onFulfilled(that.result)
        // console.log('_onFulfilled 上的 promise2', promise2, x.status)
        return that._Resolve(promise2, x, resolve, reject)
      }
    } catch (err) {
      reject(err)
    }
  }

  _onRejected (onRejected, promise2, resolve, reject, stack = false) {
    const that = this
    try {
      if (typeof onRejected !== 'function') {
          reject(that.result)
      } else {
          let x = null
          x = onRejected(that.result)
          // console.log('_onRejected 上的 promise2', promise2, x.status)
          return that._Resolve(promise2, x, resolve, reject)
      }
    } catch (err) {
      reject(err)
    }
  }

  then (onFulfilled, onRejected) {
    const that = this
    const status = that.status
    const promise2 = new Commitment((resolve, reject) => {
      switch (status) {
        case Commitment.FULFILLED:
          setTimeout(() => {
            that._onFulfilled(onFulfilled, promise2, resolve, reject)
          }, 0)
          break
        case Commitment.REJECTED:
          setTimeout(() => {
            that._onRejected(onRejected, promise2, resolve, reject)
          }, 0)
          break
        case Commitment.PADDING:
          that.resolveCallbacks.push(() => setTimeout(() => that._onFulfilled(onFulfilled, promise2, resolve, reject, true), 0))
          that.rejectCallbacks.push(() => setTimeout(() => that._onRejected(onRejected, promise2, resolve, reject, true), 0))
          break
      }
    })
    return promise2
  }

  _Resolve (promise, x, resolve, reject) {
    const that = this
    // console.log('promise', promise, 'x', x)
    if (promise === x) {
      return reject(new TypeError('promise2 不能与 x 为同一个对象！'))
    }
    if (x instanceof Commitment) {
      x.then(y => {
        return that._Resolve(promise, y, resolve, reject)
      })
    }
    if (typeof x === 'object' || typeof x === 'function') {
      if (x === null) resolve(x)
      // x 为对象或函数
      let then = null
      try {
        then = x.then
      } catch (err) {
        reject(err)
      }
      if (typeof then === 'function') {
        // 如果 then 是函数
        let called = false
        try {
          then.call(x, y => {
            if (called) return
            called = true
            console.log('添加测试数据', y)
            that._Resolve(promise, y, resolve, reject)
          }, r => {
            if (called) return
            called = true
            reject(r)
          })
        } catch (err) {
          reject(err)
        }
      } else {
        // 如果 then 不是函数
        resolve(x)
      }
    } else {
      // x 不为对象或函数
      resolve(x)
    }
  }
}

const promise = new Commitment((resolve, reject) => {
  setTimeout(() => {
    console.log('延迟等待结束')
    resolve(200)
  }, 1000)
})
// 
const promise1 = promise.then()
const promise2 = promise1.then()
promise2.then(res => {
  console.log('promise3中结果', res)
})

Commitment.deferred = function () {
  const res = {}
  res.promise = new Commitment((resolve, reject) => {
    res.resolve = resolve
    res.reject = reject
  })
  return res
}

module.exports = Commitment