console.log('l1')
let p = new Promise((resolve,reject)=>{
  console.log('p1')
  resolve(12)
  console.log('p2')
})
console.log('l2')

setTimeout(() => {
  console.log('s1')
}, 0)

p.then((d)=>{
  console.log(d,'p3')
  setTimeout(() => {
  console.log('s2')
}, 0)
})

console.log('l3')
