#promise（简版） 原理
promise 其实还是很简单的一套东西（当然是看了别人的实现以后才这么说的）
当然简单有简单的道理，主要是因为我了解核心到底是什么样子了（至于为什么这样还是没有想过）

## promise核心是什么（简版）

如果是简版的promise的话

行为上来讲，是以下两点
1. promise的链式调用，不同于其他链式调用，promise.then直接将新的promise返回
2. 但是，所使用的state和value仍然是初始的value，我们所有的then中的函数，都是基于初始的state和value来进行做动作。

我认为核心就是，维护一个公共的state和value（有点像redux中的store）,其他的then，其实类似于dispatch，我会中间进行其他副作用，但是我最终仍然会将state和value处理到该副作用对应的state and value值。

## 核心（附加）

但是，会有一个问题，这个promise实现出来并不是异步的，而且说好的then出来的是新的promise呢？我的状态我的值，都tm成一个了，是怎么个回事？

其实是因为做了这两个操作，然后就起飞了！！！！
```js
  function resolve(promise,value) {
    promise._status = 'REJECT'
    promise._value = value
    run(promise)
  }
  resolve(promise,value)
```
这里成功的将then来生成promise，转移到了resolve来生成promise，这样做的好处，在于，你可以把值和状态赋给新的promise，解决了值传递的问题。
```
  function run(promise) {
      // `then`方法中也会调用，所以此处仍需做一次判断
      if (promise._status === Status.PENDING) {
          return;
      }
      var value = promise._value;
      var callbacks = promise._status === Status.FULLFILLED
          ? promise._doneCallbacks
          : promise._failCallbacks;

      // PromiseInit需要异步操作
      setTimeout(function () {
          for (var i = 0, len = callbacks.length; i < len; i++) {
              callbacks[i](value);
          }
      });

      // 每个promise只能被执行一次。虽然`_doneCallbacks`和`_failCallbacks`用户不应该直接访问，
      // 但还是可以访问到，保险起见，做清空处理。
      promise._doneCallbacks = [];
      promise._failCallbacks = [];
  }
```
这里做的操作，是通过setTimeout，将需要执行的回调，全部放到对应的microtask中去，执行

至于race,all,wait,always，都不过是promise的语法糖罢了。（虽然promise本身就是js的语法糖，哎，糖中糖，甜坏牙）

最后感谢: [过test的promise](https://github.com/bruce-xu/Promise) (简版的那个忘记从哪里找到的了。。。百度一下就ok)

然后还顺带明白了事件循环到底是tm怎么循环的（异步真的全tm是用setTimeout最后处理出来的咩，这个是个疑问）