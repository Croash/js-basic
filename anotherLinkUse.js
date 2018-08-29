
function init(num0) {
  this.cache = num0
  const self = this
  this.add = function (addNum) {
    self.cache += addNum
    return self
  }
  this.dec = function (decNum) {
    self.cache -= decNum
    return self
  }
  this.addFunc = function (addNum) {
    self.add(addNum)
    return self.add
  }
  this.console = function () {
    console.log(self.cache)
    return self
  }
}

let f = new init(12)

f.console().addFunc(13)(22)

console.log(f.cache)