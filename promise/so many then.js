let promiseFactory = (content='nothing')=>{
  return new Promise((resolve,reject)=>{
    resolve(content)
  })
}

let p3 = promiseFactory('B')

let p1 = promiseFactory(p3)

let p2 = promiseFactory('A')

let con = (content)=>{console.log(content)}

p1.then(content=>{con(content)})
p2.then(content=>{con(content)})
