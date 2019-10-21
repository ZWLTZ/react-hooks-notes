import React, { useReducer } from 'react'

import styles from '../Example.module.scss'

// 4. hooks-userReducer
const UseReducerExample = () => {
  const [count, dispatch] = useReducer((state, type) => {
    switch (type) {
      case 'add':
        return state + 1
      case 'sub':
        return state - 1
      default:
        return state
    }
    // 0 是state的初始值
  }, 0)
  return (
    <div className={styles.main}>
      <p>当前数量是：{count} 个。</p>
      <button onClick={() => {dispatch('add')}}>增加</button>
      <button onClick={() => {dispatch('sub')}}>减少</button>
    </div>
  )
}

export default UseReducerExample
