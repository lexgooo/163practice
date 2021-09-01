// 实验实现 bind 的 polyfill
// 因为当前环境默认支持 bind 语法
// 所以更换一个的变量名

(function(){
  var slice = Array.prototype.slice;
  Function.prototype.binds1 = function () {
    var thatFunc = this, thatArg = arguments[0];
    var args = slice.call(arguments, 1);
    if(typeof thatFunc !== 'function') {
      throw new TypeError('Function.prototype.bind- what is trying to be Bound is not callable');
    }
    return function() {
      var funcArgs = args.concat(slice.call(arguments))
      return thatFunc.apply(thatArg, funcArgs);
    };
  };
})();

(function() {
  var ArrayPrototypeSlice = Array.prototype.slice;
  Function.prototype.binds2 = function(otherThis) {
    if (typeof this !== 'function') {
      throw new TypeError('Function.prototype.bind -  what is trying to be bound is not callable');
    }

    var baseArgs = ArrayPrototypeSlice.call(arguments, 1),
        baseArgsLength = baseArgs.length,
        fToBind = this,
        fNOP = function () {},
        // fNOP = {},
        fBound = function () {
          // baseArgs.length = baseArgsLength;
          baseArgs.push.apply(baseArgs, arguments);
          console.dir(this)
          console.dir(fBound)
          console.dir(fNOP)
          console.log(fNOP.isPrototypeOf(this))
          return fToBind.apply(
            fNOP.prototype.isPrototypeOf(this) ? this : otherThis,
            baseArgs
          );
          // return fToBind.apply(
          //   fNOP.isPrototypeOf(this) ? this : otherThis,
          //   baseArgs
          // );
        };
    if (this.prototype) {
      fNOP.prototype = this.prototype;
      // fNOP = this.prototype;
    }
    fBound.prototype = new fNOP();
    // fBound.prototype = fNOP;
    return fBound;
  };
})();