import React, { useState, createContext, useContext } from 'react'

import styles from '../Example.module.scss'

// 3.1 创建context 上下文
const CountContext = createContext()


// 3.2 子组件接收
const Counter = () => {
  const count = useContext(CountContext)
  return (<p>useContext传递进来的count:{count}</p>)
}

const UseContextExample = () => {
  const [count, setCount] = useState(0)
  return (
    <div className={styles.main}>
      <p>You clicked {count} times</p>
      <button onClick={() => { setCount(count + 1) }}>点击</button>
      {/* 提供共享出去，供组件接收 */}
      <CountContext.Provider value={count}>
        <Counter />
      </CountContext.Provider>
    </div>
  )
}

export default UseContextExample
