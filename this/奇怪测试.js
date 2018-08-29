function Person() {  
  this.age = 0;  
  this.timer = ()=>{
    setTimeout(function() {
      console.log(this,this.age);
    }, 3000)
  };
}

let p = new Person()

p.timer()
