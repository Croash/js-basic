const fibonacci = (num=undefined) => {
  let [current, next] = [0,1]
  if(num<0||!(typeof num==='number'))
    return '小于0或者看看你输入的是不是数字'
  if(num===0)
    return 0
  while(num>0) {
    [current, next] = [next, current+next]
    num-=1
  }
  return current
}
console.log(fibonacci(100))
const fib100 = fibonacci(100)
// 0 1 1 2 3 