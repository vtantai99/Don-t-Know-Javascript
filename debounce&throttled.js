const initApp = () => {
  const button = document.querySelector('button')

  button.addEventListener('click', throttle(clickOrder, 2000))
}

const clickOrder = () => console.log('Tai Vo ==> Hello')

document.addEventListener('DOMContentLoaded', initApp)

// using debounce with closure function
const debounce = (action, delay) => {
  delay = delay || 0

  let timerId
  console.log('Tai Vo 🚀 ~ timerId load', timerId)

  return () => {
    console.log('Tai Vo 🚀 ~ timerId prev', timerId)
    if (timerId) {
      clearTimeout(timerId)
    }

    timerId = setTimeout(action, delay)
  }
}

// using debounce with closure function
const throttle = (action, delay) => {
  delay = delay || 0

  let last = 0

  return () => {
    const now = new Date().getTime()
    if (now - last < delay) {
      console.log('Tai Vo 🚀 ~ now', now , 'last', last)
      return
    }
    last = now
    action()
  }
}