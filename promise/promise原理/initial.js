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

  // 用于处理promise.then中的回调
  // 1. 如果还在pending状态，就把cb暂存如cbarr数组中 当然这条暂时可以忽略
  // 2. 如果非pending状态

  const promiseHandle = (cb)=>{
    if( state==='pending') {
      console.log(state)
      cbArr.push(cb)
      return;
    }

    // 当then内传空时，执行下列内容
    if(!cb.onFulfilled) { 
      console.log('val',val)
      cb.resolve(val)

      return
    }

    // then内不为空，执行then内回调，改变当前promise的状态（state和val，即状态值和val值）
    const ret = cb.onFulfilled(val)
    console.log(ret)
    // resolve.call(cb,ret)
    cb.resolve(ret)
  }

  const resolve = function (newVal) {
    console.log('new',newVal)

    // resolve promise
    /// 不舒服 略空的一个地方
    // 判断是否newval是否为promise， 是则将当前环境直接注入进去（其实是这么个意思）
    if(newVal instanceof PromiseInit && newVal.then && newVal.then instanceof Function) {
      const then = newVal.then
      // then.call(newVal, resolve)
      newVal.then(resolve)
      return 
    }

    val = newVal
    state = 'fulfilled'
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

module.exports = PromiseInit
