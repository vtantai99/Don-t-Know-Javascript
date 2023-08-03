// Four Pillars of OOP
// 1. Encapsulation: Reduce complexity + increase reusability
// 2. Abstraction: Reduce complexity + isolate impact of changes
// 3. Inheritance: Eliminate redundant code
// 4. Polymorphism: Refactor ugly switch/case statements


// --------- Object --------------
// The simplest way to create an object is using an object literal 
const circle = { 
  radius: 1, 
  draw: function() {}
}; 
  
// To create multiple objects with the same structure and behaviuor (methods), use a factory or a constructor. 

// Factory function 
function createCircle(radius) { 
  return {
     radius, 
     draw: function() {}
  } 
} 

// Constructor function 
function Circle(radius) { 
   this.radius = radius; 
   this.draw = function() {}
} 
   
// Every object has a "constructor" property which returns the function that was used to construct or create that object. 
const x = {};
x.constructor; // returns Object() 
  
// In JavaScript, functions are objects. They have properties and methods. 
Circle.name; 
Circle.length;
Circle.constructor; // returns Function()
Circle.call({}, 1); // to call the Circle function 
Circle.apply({}, [1]);

// Value types are copied by their value, reference types are copied by their reference. 
// Value types in JavaScript are: String, Number, Boolean, Symbol, undefined and null
// Reference types are: Object, Function and Array 
  
// JavaScript objects are dynamic. You can add/remove properties: 
circle.location = {};
circle['location'] = {};
                     
delete circle.location; 
                     
// To enumerate the members in an object: 
for (let key in circle) console.log(key, circle[key]);

Object.keys(circle); 
                     
// To see if an object has a given property
if ('location' in circle)
                     
// Abstraction means hiding the complexity/details and showing only the essentials. 
// We can hide the details by using private members. Replace "this" with "let". 

function Circle(radius) { 
  // Public member 
  this.radius = radius; 

  // Private member                       
  let defaultLocation = {};                      
}                       

// To define a getter/setter, use Object.defineProperty():

Object.defineProperty(this, 'defaultLocation', {
   get: function() { return defaultLocation; },
   set: function(value) { defaultLocation = value; }
});

// --------- End Object --------------

// ----------- Prototype -----------
// Every object (except the root object) has a prototype (parent).
// To get the prototype of an object:
const obj = {}
Object.getPrototypeOf(obj);

// In Chrome, you can inspect "__proto__" property. But you should not use that in the code.

// To get the attributes of a property:
Object.getOwnPropertyDescriptor(obj, "propertyName");

// To set the attributes for a property:
Object.defineProperty(obj, "propertyName", {
  configurable: false, // cannot be deleted
  writable: false,
  enumerable: false,
});

// Constructors have a "prototype" property. It returns the object
// that will be used as the prototype for objects created by the constructor.
Object.prototype === Object.getPrototypeOf({});
Array.prototype === Object.getPrototypeOf([]);

// All objects created with the same constructor will have the same prototype.
// A single instance of this prototype will be stored in the memory.
const a = {};
const b = {};
Object.getPrototypeOf(a) === Object.getPrototypeOf(b); // returns true

// Any changes to the prototype will be immediately visible to all objects
// referencing this prototype.

// When dealing with large number of objects, it's better to put their
// methods on their prototype. This way, a single instance of the methods
// will be in the memory.
Circle.prototype.draw = function () {};

// To get the own/instance properties:
Object.keys(obj);

// To get all the properties (own + prototype):
for (let key in obj) {
}

// ------------------ End Prototype --------------------

// ----------- Prototypical Inheritance -----------
function Shape() {}
function Circle() {}

// Prototypical inheritance
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

function Rectangle(color) {
  // To call the super constructor
  Shape.call(this, color);
}

// Method overriding
Shape.prototype.draw = function () {};
Circle.prototype.draw = function () {
  // Call the base implementation
  Shape.prototype.draw.call(this);

  // Do additional stuff here
};

// Don't create large inheritance hierarchies.
// One level of inheritance is fine.

// Use mixins to combine multiple objects
// and implement composition in JavaScript.
const canEat = {
  eat: function () {},
};

const canWalk = {
  walk: function () {},
};

function mixin(target, ...sources) {
  // Copies all the properties from all the source objects
  // to the target object.
  Object.assign(target, ...sources);
}

function Person() {}

mixin(Person.prototype, canEat, canWalk);
// ----------- End Prototypical Inheritance -----------

// ----------- Polymorphism -----------
function HtmlElement() {
  this.click = function () {
    console.log("clicked");
  };
}

HtmlElement.prototype.focus = function () {
  console.log("focused");
};

function HtmlSelectElement(items = []) {
  this.items = items;

  this.addItem = function (item) {
    this.items.push(item);
  };

  this.removeItem = function (item) {
    this.items.splice(this.items.indexOf(item), 1);
  };

  this.render = function () {
    return `
  <select>${this.items
    .map(
      (item) => `
    <option>${item}</option>`
    )
    .join("")}
  </select>`;
  };
}
HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

function HtmlImageElement(src) {
  this.src = src;

  this.render = function () {
    return `<img src="${this.src}" />`;
  };
}
HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;

const elements = [new HtmlSelectElement([1, 2, 3]), new HtmlImageElement("http://")];

for (let element of elements) console.log(element.render());
// ----------- End Polymorphism -----------



// Practice our Pillars of OOP
// 1. Encapsulation: Reduce complexity + increase reusability
// In JavaScript, encapsulation is a concept used in object-oriented programming (OOP) to bundle data (properties) and the methods (functions) that operate on that data within a single unit called an object.
// Encapsulation helps in organizing code, preventing unauthorized access to data, and reducing the complexity of the overall program.
const person = {
  name: 'John',
  age: 30,
  getAge: function() {
    return this.age;
  },
  setAge: function(newAge) {
    this.age = newAge;
  }
};
// console.log('Tai Vo 🚀 ~ person:', person.getAge())

class PersonV2 {
  constructor(name, age) {
    this.name = name;
    let _age = age; // Private variable

    this.getAge = function() {
      return _age;
    };

    this.setAge = function(newAge) {
      _age = newAge;
    };
  }
}

const personV2 = new PersonV2('John', 30);
// console.log('Tai Vo 🚀 ~ personV2:', personV2)

// 2. Abstraction: Reduce complexity + isolate impact of changes
// Abstraction is another important concept in object-oriented programming (OOP) that is also applicable to JavaScript.
// It is the process of hiding the implementation details of an object and exposing only the essential features or functionalities to the outside world.
// Abstraction allows you to create a simplified interface for using an object, making it easier to understand and work with.
class ShapeV2 {
  constructor() {
    if (new.target === ShapeV2) {
      throw new Error('Tai Vo => ShapeV2 class cannot be instantiated directly.');
    }
  }

  // Abstract method
  draw() {
    throw new Error('Tai Vo => Method draw() must be implemented in the subclass.');
  }

  // Concrete method
  calculateArea() {
    return 1
    // Some default implementation for calculating area
  }
}

class CircleV2 extends ShapeV2 {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  draw() {
    // Implementation for drawing a circle
  }
}

const circleV2 = new CircleV2(10)
// ----------------------------------
// Hiding Implementation Details
function createPerson(name, age) {
  let _name = name; // Private variable
  let _age = age; // Private variable

  return {
    getName: function() {
      return _name;
    },
    setName: function(newName) {
      _name = newName;
    },
    getAge: function() {
      return _age;
    }
  };
}

const personCreated = createPerson('John', 30);
console.log(personCreated.getName()); // "John"
personCreated.setName('Mike');
console.log(personCreated.getName()); // "Mike"

// 3. Inheritance: Eliminate redundant code
// Inheritance is a fundamental concept in object-oriented programming (OOP) that allows a class (or constructor function) to inherit properties and methods from another class.
// In JavaScript, inheritance can be achieved through prototypes, ES6 classes, or object linking. 
// Parent object constructor
function Animal(name) {
  this.name = name;
}
// Prototype-based Inheritance ---------------------------
// Adding a method to the prototype of Animal
Animal.prototype.sayHello = function() {
  console.log(`Tai Vo => Hello, I'm ${this.name}`);
};

// Child object constructor inheriting from Animal
function Dog(name, breed) {
  Animal.call(this, name); // Call the Animal constructor to set the 'name'
  this.breed = breed;
}

// Linking the prototype of Dog to the prototype of Animal
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Adding a method to the prototype of Dog
Dog.prototype.bark = function() {
  console.log('Tai Vo => Woof! Woof!');
};

const myDog = new Dog('Buddy', 'Golden Retriever');
myDog.sayHello(); // "Hello, I'm Buddy"
myDog.bark();     // "Woof! Woof!"

// ES6 Class-based Inheritance -----------------------------
class AnimalV2 {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log(`Hello, I'm ${this.name}`);
  }
}

class DogV2 extends AnimalV2 {
  constructor(name, breed) {
    super(name); // Call the constructor of the parent class to set the 'name'
    this.breed = breed;
  }

  bark() {
    console.log('Woof! Woof!');
  }
}

const myDogV2 = new DogV2('Buddy', 'Golden Retriever');
myDog.sayHello(); // "Hello, I'm Buddy"
myDog.bark();     // "Woof! Woof!"


// 4. Polymorphism: Refactor ugly switch/case statements

// Parent class
class AnimalP {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    console.log("AnimalP makes a sound");
  }
}

// Child class inheriting from AnimalP
class DogP extends AnimalP {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  makeSound() {
    console.log("DogP barks");
  }
}

// Child class inheriting from Animal
class CatP extends AnimalP {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  makeSound() {
    console.log("CatP meows");
  }
}

// Function that accepts an Animal object and invokes its makeSound method
function animalSound(animal) {
  animal.makeSound();
}

const myDogP = new DogP('Buddy', 'Golden Retriever');
const myCatP = new CatP('Whiskers', 'Siamese');

animalSound(myDogP); // Output: "Dog barks"
animalSound(myCatP); // Output: "Cat meows"