const PromiseInit = require('./initial.js')

let testPromiseInit = new PromiseInit((resolve)=>{

  let input = new PromiseInit((resolve)=>{
    resolve(222)
  })
  console.log(JSON.stringify(input))
  resolve(input)

})
.then((val)=>{
  console.log('qq',val+1)
  return val+1
})
.then((val)=>{
  console.log('qq',val+1)
  return val+1
})


testPromiseInit
  .then()
  .then((val)=>{
    console.log('qq',val+1)
    return val+1
  })
