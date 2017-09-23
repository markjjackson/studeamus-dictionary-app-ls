// Import main dependencies
import {
  createStore,
  combineReducers,
} from 'redux'

// Import reducers

import dictionaryReducer from 'Reducers/dictionary'

// Create store
const store = createStore(
  combineReducers({
    dictionary: dictionaryReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
