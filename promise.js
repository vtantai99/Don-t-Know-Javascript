const getValues = async (name) => {
  if (name === 'a') return new Promise((res) => setTimeout(() => res(name), 5000))
  if (name === 'b') return new Promise((res) => setTimeout(() => res(name), 3000))
  return new Promise((res) => setTimeout(() => res(name), 4000))
}

const testSpeed = async () => {
  console.log(await getValues('a'))
  console.log(await getValues('b'))
  console.log(await getValues('c'))
}

const arr = ['a', 'b', 'c']

const promises = arr.map((name) => getValues(name))

const test = async () => {
  for await (let item of promises) {
    console.log(item)
  }
}

test()
// testSpeed()