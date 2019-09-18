import React from "react"
import { useSelector } from "react-redux"
import ButtonGroup from "./BtnGroupComp"

function App() {
  const counter = useSelector(state => state.counter)

  return (
    <div>
      <h1>Simple Counter App</h1>
      <h3>Count: {counter}</h3>
      <ButtonGroup />
    </div>
  )
}

export default App
