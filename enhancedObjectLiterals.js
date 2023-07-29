var text = "Javascript"
var price = 1000

// Định nghĩa key: value cho object
var course = { text, price }

// Định nghĩa method cho object
var courseV2 = {
  text,
  price,
  getName() {
    return text
  }
}

var fullName = 'name'
var fieldPrice = 'price'

const courseV3 = {
  [fullName]: 'Javascript',
  [fieldPrice]: 1000
}

console.log(courseV3)

