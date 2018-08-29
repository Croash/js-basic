## 坑
``` js
let controller = {
  _val:0,
  makeReq: function(val) {
    let self = this
    self._val = val
    btn.addEventlistener('click',()=>{
      this.makeReq()//this直接指向window
      self.makeReq()//ok
    })
  }
}
```