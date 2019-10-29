import counterReducer from "../reducers/counter"

describe("Counter Reducer", () => {
  const initialState = {
    count: 0
  }

  it("returns the initial state when an action type is not passed", () => {
    const reducer = counterReducer(undefined, {})

    expect(reducer).toEqual(initialState)
  })

  it("handles INCREMENT as expected", () => {
    const reducer = counterReducer(initialState, { type: "INCREMENT", payload: 1 })
    expect(reducer).toEqual({
      count: 1
    })
  })

  it("handles DECREMENT as expected", () => {
    const reducer = counterReducer(initialState, { type: "DECREMENT", payload: 1 })
    expect(reducer).toEqual({
      count: -1
    })
  })
  it("handles CANCEL as expected", () => {
    const reducer = counterReducer(initialState, { type: "CANCEL" })
    expect(reducer).toEqual({
      count: 0
    })
  })
})
