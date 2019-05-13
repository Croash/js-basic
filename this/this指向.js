var num = 250

function newObj() {
 this.num = 123
  this.consoleLog = function () {
    console.log(this.num)
  }
}

let obj = new newObj()

let testObj = {
  num: 2222
}

obj.consoleLog() //.bind(testObj)()
console.log(document.num)

// 1. bind 和 call 其实是第一级 显式
// 2. new 和 {} 其实是第二级 隐式
// 3. 实际使用(根据所使用作用域，这种都是和闭包有关吧？)
// 4. 最终，寻找到window上
// 5. 严格模式就只能bind undefined, gg

// 说白了，就是this在运行时才会决定会