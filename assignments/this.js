/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window/global binding: `this` will refer to the `window` Object when used in the context of a browser console
* 2. implicit binding: refers the the object mentioned before the dot in dot/bracket notation
* 3. new binding: when an object is created via the `new` keyword, `this` refers to the specific/newly-created object
* 4. explicit binding: like the name implies, `this` will refer to whatever is explicitly defined (usually by the `apply` or `call` methods)
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function testThis() {
  console.log(this)              // => Window {}
}
testThis()

// Principle 2

// code example for Implicit Binding
const testObj = {
  name: 'this test',
  printThis: function() {
    console.log(this)
  }
}
testObj.printThis()              // => Object { name: "this test", printThis: printThis() }

// Principle 3

// code example for New Binding
function Computer(os, brand) {
  this.os = os
  this.brand = brand
  this.printInfo = function() {
    console.log(`OS: ${this.os}\nBrand: ${this.brand}`)
    console.log(this)
  }
}

const macbook = new Computer('macos', 'apple')
const dell = new Computer('windows', 'dell')

macbook.printInfo()              // => Object { os: "macos", brand: "apple", printInfo: printInfo() }
dell.printInfo()                 // => Object { os: "windows", brand: "dell", printInfo: printInfo() }

// Principle 4

// code example for Explicit Binding
macbook.printInfo.apply(dell)    // => Object { os: "windows", brand: "dell", printInfo: printInfo() }
dell.printInfo.apply(macbook)    // => Object { os: "macos", brand: "apple", printInfo: printInfo() }
