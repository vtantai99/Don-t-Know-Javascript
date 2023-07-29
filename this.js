const iphone7 = {
  // Property
  name: 'iPhone 7',
  color: 'Pink',
  weight: 300,

  // Method
  takePhoto() {
    console.log(this)
  },

  objChild: {
    methodChild() {
      console.log(this)
    }
  }
}

// console.log(iphone7.objChild.methodChild())

function Car(name, color, weight) {
  this.name = name
  this.color = color
  this.weight = weight

  this.run = function() {
    console.log('Running...', this)
  }
}

Car.prototype.show = function() {
  this.new = 'New'
  console.log(this)
}

const mercedes450 = new Car('Mercedes 450', 'Black', 1200)

// Bind
this.firstName = 'Tai'
this.lastName = 'Vo'

const teacher = {
  firstName: 'Boy',
  lastName: 'Vo',
  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

// Case 1:
console.log(teacher.getFullName())
// Case 2:
const getTeacherName = teacher.getFullName.bind(teacher)

console.log(getTeacherName === teacher.getFullName)

console.log(getTeacherName())