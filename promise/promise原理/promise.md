#promise 原理
promise 其实还是很简单的一套东西（当然是看了别人的实现以后才这么说的）
当然简单有简单的道理，主要是因为我了解核心到底是什么样子了（至于为什么这样还是没有想过）

## promise核心是什么

行为上来讲，是以下两点
1. promise的链式调用，不同于其他链式调用，promise.then直接将新的promise返回
2. 但是，所使用的state和value仍然是初始的value，我们所有的then中的函数，都是基于初始的state和value来进行做动作。

我认为核心就是，维护一个公共的state和value（有点像redux中的store）,其他的then，其实类似于dispatch，我会中间进行其他副作用，但是我最终仍然会将state和value处理到该副作用对应的state and value值。

至于race,all,wait,always，都不过是promise的语法糖罢了。（虽然promise本身就是js的语法糖，哎，糖中糖，甜坏牙）