import React, { createContext, useReducer } from 'react'

// 1、创建color store
export const ColorContext = createContext({})

// 4.1 创建action类型
export const CHANGE_COLOR = 'CHANGE_COLOR'

const reducer = (state, action) => {
  switch (action.type) {
    case CHANGE_COLOR:
      return action.color
    default:
      return state
  }
}

export const ReducerColor = props => {
  // 4.2 接收传递
  const [color, dispatch] = useReducer(reducer, 'crimson')
  return (
    <ColorContext.Provider value={{ color, dispatch }}>
      {props.children}
    </ColorContext.Provider>
  )
}
