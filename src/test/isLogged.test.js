import loggedReducer from "../reducers/isLogged"

describe("isLogged Reducer", () => {
  const initialState = { loggedIn: false }

  it("returns the initial state when an action type is not passed", () => {
    const reducer = loggedReducer(undefined, {})

    expect(reducer).toEqual(initialState)
  })

  it("handles SIGN_IN as expected", () => {
    const reducer = loggedReducer(initialState, { type: "SIGN_IN", payload: { loggedIn: true } })
    expect(reducer).toEqual({ loggedIn: true })
  })
})
