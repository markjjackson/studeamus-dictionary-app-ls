// Debounce a function.
// Func -> Number -> Func
const debounce = func => delay => {
  let debounceTimeout = null
  return function() {
    console.log('test')
    let context = this
    let args = arguments
    console.log(args)
    clearTimeout(debounceTimeout)
    debounceTimeout = setTimeout(() => {
      func.apply(context, args)
    }, delay)
  }
}

module.exports = debounce