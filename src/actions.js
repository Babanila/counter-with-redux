export const increment = num => {
  return {
    type: "INCREMENT",
    payload: num ? num : 1
  }
}

export const decrement = num => {
  return {
    type: "DECREMENT",
    payload: num ? num : 1
  }
}

export const cancel = () => {
  return {
    type: "CANCEL"
  }
}
