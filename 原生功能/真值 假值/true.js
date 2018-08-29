const con = (...arg)=>{console.log(...arg)}
var a = new Boolean(false)
var d = Boolean(a)
con(a,d)
if(a)
  console.log('sg')
//0,-0,undefined,null,NaN,''
//假值 其余都为真值
