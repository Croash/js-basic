function sg(props) {
  this.props = props
  this.console = ()=>{
    console.log(this.props)
  }
}

let newSg = new sg()

console.log(newSg instanceof sg)
