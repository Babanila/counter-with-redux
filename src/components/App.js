import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, cancel } from "../actions"
import "../styles/App.css"

function App() {
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>Simple Counter App</h1>
      <h3>Counter {counter}</h3>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button id="cancelButton" onClick={() => dispatch(cancel())}>
        reset
      </button>
    </div>
  )
}

export default App
