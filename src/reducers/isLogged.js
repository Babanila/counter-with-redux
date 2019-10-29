const initialState = {
  loggedIn: false
}

const loggedReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return { ...state, loggedIn: action.payload.loggedIn }
    default:
      return initialState
  }
}

export default loggedReducer
