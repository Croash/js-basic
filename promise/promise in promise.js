let delay = (time)=>{
  return new Promise((resolve,reject)=>{
    setTimeout(resolve,time)
  })
}

let p = delay(100)
.then(()=>{
  console.log(100)
  return delay(3000)
})
.then(()=>{
  console.log(3000)
  return delay(10000)
})
.then(()=>{
  console.log(10000)
})