import configureMockStore from "redux-mock-store"
import { increment, decrement, cancel } from "../actions"

const mockStore = configureMockStore([])

describe("User Actions", () => {
  let store
  const data = 5

  beforeEach(() => {
    store = mockStore({
      count: 0
    })
  })

  it("dispatches INCREMENT action and returns 1 as default", async () => {
    await store.dispatch(increment())
    const actions = store.getActions()

    expect.assertions(2)
    expect(actions[0].type).toEqual("INCREMENT")
    expect(actions[0].payload).toEqual(1)
  })

  it("dispatches INCREMENT action and returns data", async () => {
    await store.dispatch(increment(data))
    const actions = store.getActions()

    expect.assertions(2)
    expect(actions[0].type).toEqual("INCREMENT")
    expect(actions[0].payload).toEqual(5)
  })

  it("dispatches DECREMENT action and returns 1 as default ", async () => {
    await store.dispatch(decrement())
    const actions = store.getActions()

    expect.assertions(2)
    expect(actions[0].type).toEqual("DECREMENT")
    expect(actions[0].payload).toEqual(1)
  })

  it("dispatches DECREMENT action and returns data", async () => {
    await store.dispatch(decrement(data))
    const actions = store.getActions()

    expect.assertions(2)
    expect(actions[0].type).toEqual("DECREMENT")
    expect(actions[0].payload).toEqual(data)
  })

  it("dispatches CANCEL action and returns default", async () => {
    await store.dispatch(cancel())
    const actions = store.getActions()

    expect.assertions(1)
    expect(actions[0].type).toEqual("CANCEL")
  })
})
