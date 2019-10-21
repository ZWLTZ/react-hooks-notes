import React, { useState } from 'react'

import styles from '../Example.module.scss'

// 1. hooks-useState
const UseStateExample = () => {
  //  数组结构赋值。useState不能用于条件语句中！！！0 是count的初始值
  const [count, setCount] = useState(0)
  return (
    <div className={styles.main}>
      <p>You clicked {count} times.</p>
      <button onClick={() => { setCount(count + 1) }}>点击</button>
    </div>
  )
}

export default UseStateExample
