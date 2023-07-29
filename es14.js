// ECMAScript 2023
const array = [3, 2, 1]

// toSorted
const sortedArray = array.toSorted()
console.log('Tai Vo 🚀 ~ sortedArray:', sortedArray)

// toReversed
const reversedArray = sortedArray.toReversed()
console.log('Tai Vo 🚀 ~ reversedArray:', reversedArray)

// toSpliced
const splicedArray = array.toSpliced(array.length - 1, 1, 'replaced 1 by this')
console.log('Tai Vo 🚀 ~ splicedArray:', splicedArray)

// with
const withThree = array.with(2, 3)
console.log('Tai Vo 🚀 ~ withThree:', withThree)



