// Debounce a function.
// Func -> Number -> Func
const debounce = func => delay => {
  let debounceTimeout = null
  return function() {
    let context = this
    let args = arguments
    clearTimeout(debounceTimeout)
    debounceTimeout = setTimeout(() => {
      func.apply(context, args)
    }, delay)
  }
}

module.exports = debounce