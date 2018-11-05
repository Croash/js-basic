let partialFactory = (...args) => {
  return [...args]
}

const ListFunc =  partialFactory.bind(undefined,12,37)

const ListFuncAnotherway = (...args) => {
  return partialFactory(12,37,...args)
}

console.log('partialWay',ListFuncAnotherway(25,18))

console.log(ListFunc(1),'qqqq')