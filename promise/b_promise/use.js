const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1)
  })
})

promise.then(res => {
  console.log(2)
  return res
}).then(res => {
  console.log(res)
}, err => {
  console.log(err)
})