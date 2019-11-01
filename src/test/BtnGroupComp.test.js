import React from "react"
import { shallow, mount } from "enzyme"
import BtnGroupComp from "../components/BtnGroupComp"

describe("BtnGroupComp Test", () => {
  let wrapper
  let handleClick = jest.fn()

  beforeEach(() => {
    wrapper = shallow(<BtnGroupComp />)
  })

  it("should render and match the snapshot", () => {
    expect(wrapper).toMatchSnapshot()
  })

  it("should not log errors in console", () => {
    const spy = jest.spyOn(global.console, "error")
    expect(wrapper).not.toBeNull()
    expect(spy).not.toHaveBeenCalled()
  })

  it("should render the exact number of components", () => {
    expect(wrapper.find("div").length).toBe(1)
    expect(wrapper.find("button").length).toBe(3)
  })

  it("should show the default text on buttons", () => {
    expect(wrapper.find(".plus").text()).toEqual("+")
    expect(wrapper.find(".minus").text()).toEqual("-")
    expect(wrapper.find(".cancelButton").text()).toEqual("reset")
  })
})
