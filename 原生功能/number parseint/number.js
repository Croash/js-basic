const con = (...arg)=>{console.log(...arg)}
let num = '42'
let str = '42px4'

con(Number(num))
con(parseInt(num))

con(Number(str))
con(parseInt(str))