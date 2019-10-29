import React from "react"
import { shallow } from "enzyme"
import App from "../components/App"

describe("App Test", () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it("should render and match the snapshot", () => {
    expect(wrapper).toMatchSnapshot()
  })

  it("should not log errors in console", () => {
    const spy = jest.spyOn(global.console, "error")
    expect(wrapper).not.toBeNull()
    expect(spy).not.toHaveBeenCalled()
  })
})
