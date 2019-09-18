import React from "react"
import { useDispatch } from "react-redux"
import { increment, decrement, cancel } from "../actions"
import "../styles/BtnGroupComp.css"

const ButtonGroup = () => {
  const dispatch = useDispatch()
  return (
    <div>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button className="cancelButton" onClick={() => dispatch(cancel())}>
        reset
      </button>
    </div>
  )
}

export default ButtonGroup
