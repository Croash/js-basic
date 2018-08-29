function link(props) {
  const { num } = props
  this.num = num
  this.add = function(int) {
    this.num+=num
    console.log(this)
    return this
  }
  this.dec = function(int) {
    this.num-=num
    console.log(this)
    return this
  }
  this.console = function() {
    console.log(JSON.stringify(this))
    return this
  }
}

let newLink = new link({num:12})

newLink.console().add(12)
