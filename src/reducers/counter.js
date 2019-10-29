const initialState = {
  count: 0
}

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return Object.assign({}, state, {
        count: state.count + action.payload
      })

    case "DECREMENT":
      return Object.assign({}, state, {
        count: state.count - action.payload
      })
    case "CANCEL":
      return initialState
    default:
      return state
  }
}

export default counterReducer
