const initialState = []

const dictionaryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_DICTIONARY':
        return action.payload
    default:
      return state
  }
}

export default dictionaryReducer
