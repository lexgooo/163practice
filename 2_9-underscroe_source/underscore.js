(function (root) {
  // 构造函数
  var _ = function (obj) {
    if (!(this instanceof _)) {
      return new _(obj);
    }
    // this.value = obj
    this.wrap = obj;
  }

  _.map = function () {
    console.log(1)
  }

  _.max = function (args) {
    args.push('max', 'beyond');
    return args;
  }

  _.unique = function (array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
      const target = callback ? callback(array[i]) : array[i];
      if (result.indexOf(target) === -1) {
        result.push(target);
      }
    }
    return result;
  }

  // _.prototype.map = function () {
  //   console.log('hello map')
  // }

  _.each = function (array, callback) {
    for (let i = 0; i < array.length; i++) {
      callback.call(array, array[i])
    }
  }

  _.functions = function(obj) {
    const result = [];
    for (let key in obj) {
      result.push(key)
    }
    return result;
  }

  // 开启链式调用
  _.chain = function (obj) { // 数据源
    const instance = _(obj); // 特殊的实例对象
    instance._chain = true; // 特殊的属性，作为链式调用的凭证
    return instance;
  }

  const result = function (instance, obj) {
    if (instance._chain) {
      instance.wrap = obj;
      return instance;
    }
    return obj;
  }

  // 这里可以使用 _.value 这种方法来挂载吗？
  _.prototype.value = function () {
    return this.wrap;
  }

  _.mixin = function (obj) {
    _.each(_.functions(obj), function(key) {
      const func = obj[key];
      _.prototype[key] = function () {
        const args = [this.wrap]
        Array.prototype.push.apply(args, arguments)
        // 为什么要用 apply 来绑定一个 this，这么做的目的何在？
        // return func.apply(this, args);
        // this 用来判断是否需要链式调用 this._chain === true
        // func.apply(this, args) 数据经过处理之后的结果
        return result(this, func.apply(this, args));
      }
    });
    // 我的实现
    // const keys = Object.keys(obj)
    // keys.forEach(key => {
    //   const func = obj[key]
    //   _.prototype[key] = function (...args) {
    //     const value = this.value
    //     return func(value, ...args)
    //   };
    // })
  }

  _.mixin(_)
  root._ = _; // 这句是什么意思
})(this)