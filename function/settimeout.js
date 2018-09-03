const fnLet = ()=>{
  for( let i=0; i<12; i++ ) {
    setTimeout(function timer() {
      console.log(i)
    },i*1000)
  }
}

const fnVar = ()=>{
  for( var i=0; i<12; i++ ) {
    setTimeout(function timer() {
      console.log(i)
    },i*1000)
  }
}

const fnVarWithClosure = ()=>{
  for( var i=0; i<12; i++ ) {
    (function(i) {
      setTimeout(function timer() {
        console.log(i)
      },i*1000)
    })(i)
  }
}

fnVarWithClosure()
