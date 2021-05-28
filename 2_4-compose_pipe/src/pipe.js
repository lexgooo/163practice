/**
 * pipe Function from left to right
 * pipe(a,b,c) = (...args) => c(b(a(...args)));
 *
 * 代数计算, 符合阅读习惯, 从左到右.
 *
 * 请实现一个pipe函数，并且保证pipe.test.js通过
 *
 * @param  {Array[Function]} funcs
 */
 const Pipe = (...funcs) => x => funcs.reduce((res, cb) => cb(res), x)
 export default Pipe
 