// Async await with forLoop

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const getPost = async (id) => {
  return await (await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)).json()
}

// const runWithFor = async () => {
//   console.log("Tai Vo 🚀 ~ START-LOOP")
//   for (let index = 0; index < array.length; index++) {
//     const data = await getPost(index + 1)
//     console.log("Tai Vo 🚀 ~ data", data)
//   }
//   console.log("Tai Vo 🚀 ~ END-LOOP")
// }

// runWithFor()

const runWithForEach = () => {
  console.log("Tai Vo 🚀 ~ START-LOOP")
  array.forEach(async (id) => {
    const data = await getPost(id)
    console.log("Tai Vo 🚀 ~ data", data)
  })
  console.log("Tai Vo 🚀 ~ END-LOOP")
}

// runWithForEach()

const runWithForOf = async () => {
  console.log("Tai Vo 🚀 ~ START-LOOP")
  for (const index of array) {
    const data = await getPost(index)
    console.log("Tai Vo 🚀 ~ data", data)
  }
  console.log("Tai Vo 🚀 ~ END-LOOP")
}

runWithForOf()
