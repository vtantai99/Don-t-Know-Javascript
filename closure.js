// Ex1
const createCounter = () => {
  let counter = 0

  const increase = () => {
    return ++counter
  }

  return increase
}
const increase = createCounter()

// Ex2
const createLogger = (title) => {
  const logger = (message) => `[${title}] ${message}`

  return logger
}

const infoLogger = createLogger('Info')
const errorLogger = createLogger('Error')

console.log(infoLogger('Hi there'))
console.log(errorLogger('Token expired'))

// Ex3
const createCars = (key) => {
  const cars = []

  return {
    add: (car) => cars.push(car),
    show: () => console.log(cars)
  }
}

const newCars = createCars()

newCars.add('VesPa')
newCars.show()


