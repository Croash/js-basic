function spread(strings,...values) {
  console.log(strings)
  console.log(values)
}

let val1 = 'value1',
  val2 = 'value2',
  val3 = 'value3'

let str = `this is:${val1},${val2},${val3}`

spread`this is:${val1},${val2},${val3}`