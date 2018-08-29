let val = 0

let p = new Promise((res,rej)=>{
  rej('error')
})

p
  .then(d=>d+1,(e)=>{console.log(e)})
  .then(d=>{ console.log(d) 
    return 22 
  },
  e=>{console.log('mf')}
)

p
  .then(d=>d,e=>{console.log(e)})
  .then(d=>{
    console.log(d)
  })

// p相当于一个已经被记录的状态