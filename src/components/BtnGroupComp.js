import React from "react"
import { useDispatch } from "react-redux"
import { increment, decrement, cancel } from "../actions"
import "../styles/BtnGroupComp.css"

const ButtonGroup = () => {
  const dispatch = useDispatch()
  const handleClick = data => {
    return () => dispatch(data())
  }
  return (
    <div>
      <button className="plus" onClick={handleClick(increment)}>
        +
      </button>
      <button className="minus" onClick={handleClick(decrement)}>
        -
      </button>
      <button className="cancelButton" onClick={handleClick(cancel)}>
        reset
      </button>
    </div>
  )
}

export default ButtonGroup

/*
<div>
  <button onClick={() => dispatch(increment())}>+</button>
  <button onClick={() => dispatch(decrement())}>-</button>
  <button className="cancelButton" onClick={() => dispatch(cancel())}>
    reset
  </button>
</div>
*/
