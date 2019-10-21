import React, { useState, useEffect } from 'react'

import styles from '../Example.module.scss'

const TestUnMounted = () => {
  useEffect(() => {
    console.log(`Child: useEffect-->component mounted and updated.`)
    return () => {
      // return 会与：willUnMounted
      console.log(`Child: useEffect---->component will unmount.`)
    };
  }, [])
  return (
    <div>哈哈哈哈,useEffect可以代替componentDidMount和willUnMount</div>
  )
}
// 2、Hooks-useEffect
const UseEffectExample = () => {
  const [count, setCount] = useState(0)
  const [show, setShow] = useState(false)
  // 1、代替了：componentDidMount和componentDidUpdate  lifecycle
  // 2、异步的
  useEffect(() => {
    console.log(`Parent: useEffect-->${show}-mounted and updated.`)
  })
  return (
    <div className={styles.main}>
      <p>You clicked {count} times.</p>
      <button onClick={() => { setCount(count + 1) }}>增加</button>
      <button onClick={() => { setShow(!show) }}>{show ? '隐藏' : '显示'}</button>
      {
        show ? <TestUnMounted /> : null
      }
    </div>
  )
}

export default UseEffectExample
