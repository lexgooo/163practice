const arr = [1, 2, 3, 4, 5, 6]
let i = 0;
const res = arr.reduce((total, cur, index) => {
  console.log(i, total, cur, index)
  i++
  return total + cur
})

console.log(res)