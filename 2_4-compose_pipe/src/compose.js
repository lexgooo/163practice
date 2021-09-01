/**
 * Compose Function from right to left
 * compose(a,b,c) = (...args) => a(b(c(...args)));
 *
 * 在數學中，複合函數（英語：function composition）是指逐點地把一個函數作用於另一個函數的結果，
 * 所得到的第三個函數。例如，函數 f : X → Y 和 g : Y → Z 可以複合，得到從 X 中的 x 映射到 Z 中 g(f(x)) 的函數。
 * 直觀來說，如果 z 是 y 的函數，y 是 x 的函數，那麼 z 是 x 的函數。
 * 得到的複合函數記作 g ∘ f : X → Z，定義為對 X 中的所有 x，(g ∘ f )(x) = g(f(x))。[note 1] 直觀地說，
 * 複合兩個函數是把兩個函數連結在一起的過程，內函數的輸出就是外函數的輸入。 by: https://zh.wikipedia.org/wiki/复合函数
 *
 *
 * usage:
 *  - Redux,  compose(Middleware)
 *  - React const TodoList = compose(Container, List, R.map(ListItem), items);
 *
 * @param  {Array[Function]} funcs
 */
 export default function Compose(...funcs) {
  if (funcs.length === 0) {
    return arg => arg;
  }
  return funcs.reduce((a, b) => (...args) => a(b(...args)));
}

// function Compose(...funcs) {
//   if (funcs.length === 0) {
//     return arg => arg;
//   }
//   return funcs.reduce((a, b, index) => {
//     // console.log(a.toString(), ',', b.toString(), ', 索引', index)
//     // console.log(a, a(b))
//     return (...args) => {
//       a(b(...args))
//     }
//   });
// }

// let add = n => n + 3;
// let multiple = n => n * 2;
// let minus = n => n - 1;

// console.log(Compose(add, multiple, minus).toString())
// console.log(Compose(1, 2, 3).toString())