let controller = {
  _val:0,
  makeReq: function(val) {
    let self = this
    self._val = val
    console.log(self._val)
    if(val==1)
      self.makeReq(225)
  }
}

controller.makeReq(1)
