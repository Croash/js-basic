function PromiseInit(fn) {
  var state = 'pending'
  let val = null
  let cbArr = []

  this.then = (onFulfilled)=>{
    return new PromiseInit(resolve=>{
      promiseHandle({
        onFulfilled: onFulfilled||null,
        resolve
      })
    })
  }

  const promiseHandle = (cb)=>{
    if( state==='pending') {
      console.log(state)
      cbArr.push(cb)
      return;
    }
    if(!cb.onFulfilled) {
      cb.onFulfilled(val)
      console.log('ful')
      return
    }

    const ret = cb.onFulfilled(val)
    console.log(ret)
    // resolve.call(cb,ret)
    cb.resolve(ret)
  }


  const resolve = function (newVal) {
    // resolve promise
    /// 不舒服 略空的一个地方
    // 判断是否newval是否为promise， 是则将当前环境直接注入进去（其实是这么个意思）
    if(newVal instanceof Object && newVal.then && newVal.then instanceof Function) {
      const then = newVal.then
      // then.call(newVal, resolve)
      newVal.then(resolve)
      return 
    }

    val = newVal
    state = 'fulfilled'
    console.log(state)
    setTimeout(
      ()=>{
        cbArr.forEach(function (cb) {
          promiseHandle(cb)
        });
      },0
    )
  }

  fn(resolve)
}

let testPromiseInit = new PromiseInit((resolve)=>{

  // let input = new PromiseInit((resolve)=>{
  //   resolve(222)
  // })
  resolve(222)

})
.then((val)=>{
  console.log('qq',val)
  return 25011
})
.then((val)=>{
  console.log('qq',val)
  return 2510
})


