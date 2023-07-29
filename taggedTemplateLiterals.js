const highlight = ([first, ...strings], ...rest) => {
  console.log(first)
  console.log(strings)
  // console.log(rest)
}

const location = 'BAP'
const person = 'BOY'

highlight`${person} working on at ${location}`