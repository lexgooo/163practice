const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

function MyPromise (fn) {
  this.status = PENDING;
  this.value = null;
  this.reason = null;

  this.onFulfilledCallbacks = [];
  this.onRejectedCallbacks = [];

  const that = this;

  function resolve (value) {
    that.status = FULFILLED;
    that.value = value;

    that.onFulfilledCallbacks.forEach(callback => {
      callback(that.value);
    });
  }

  function reject (reason) {
    that.status = REJECTED;
    that.reason = reason;

    that.onRejectedCallbacks.forEach(callback => {
      callback(that.reason);
    })
  }

  try {
    fn(resolve, reject);
  } catch (error) {
    reject(error);
  }
}

function resolvePromise (promise, x, resolve, reject) {
  if (promise === x) {
    return reject(new TypeError('The promise and the return value are the same'));
  }

  if (typeof x === 'object' || typeof x === 'function') {
    if (x === null) {
      return resolve(x);
    }
    try {
      const then = x.then;
    } catch (error) {
      return reject(error);
    }

    if (typeof then === 'function') {
      let called = false;
      try {
        then.call(x, function (y) {
          if (called) return;
          called = true;
          resolvePromise(promise, y, resolve, reject);
        }, function (r) {
          if (called) return;
          called = true;
          reject(r);
        });
      } catch (error) {
        if (called) return;
        reject(error);
      }
    } else {
      resolve(x);
    }
  } else {
    resolve(x);
  }
}

MyPromise.prototype.then = function (onFulfilled, onRejected) {
  const that = this;
  
  const realOnFulfilled = function (resolve, reject) {
    setTimeout(function () {
      try {
        if (typeof onFulfilled !== 'function') {
          resolve(that.value);
        } else {
          const x = onFulfilled(that.value)
          resolvePromise(promise2, x, resolve, reject);
        }
      } catch (error) {
        reject(error)
      }
    }, 0)
  }

  const realOnRejected = function (resolve, reject) {
    setTimeout(function () {
      try {
        if (typeof onRejected !== 'function') {
          reject(that.reason)
        } else {
          const x = onRejected(that.reason)
          resolvePromise(promise2, x, resolve, reject)
        }
      } catch (error) {
        reject(error)
      }
    }, 0)
  }

  if (this.status === FULFILLED) {
    const promise2 = new MyPromise(function (resolve, reject) {
      realOnFulfilled(resolve, reject)
    })
    return promise2;
  }
  if (this.status === REJECTED) {
    const promise2 = new MyPromise(function (resolve, reject) {
      realOnRejected(resolve, reject)
    })
    return promise2;
  }
  if (this.status === PENDING) {
    const promise2 = new MyPromise(function (resolve, reject) {
      that.onFulfilledCallbacks.push(realOnFulfilled)
      that.onRejectedCallbacks.push(realOnRejected)
      return promise2;
    })
  }
}

MyPromise.deferred = function () {
  const result = {};
  result.promise = new MyPromise(function (resolve, reject) {
    result.resolve = resolve;
    result.reject = reject;
  });
  return result;
}

module.exports = MyPromise;

