import React, { useState, useEffect } from 'react'

import styles from '../Example.module.scss'

const TestUnMounted = () => {
  useEffect(() => {
    console.log(`useEffect---->component mounted and updated.`)
    return () => {
      // return 会与：willUnMounted
      console.log(`useEffect---->component will unmounted.`)
    };
  }, [])
  return (
    <div>哈哈哈哈</div>
  )
}
// 2、Hooks-useEffect
const UseEffectExample = () => {
  const [count, setCount] = useState(0)
  const [show, setShow] = useState(false)
  // 1、代替了：componentDidMount和componentDidUpdate  lifecycle
  // 2、异步的
  useEffect(() => {
    console.log(`useEffect---->${show}`)
  })
  return (
    <div className={styles.main}>
      <p>You clicked {count} times.</p>
      <button onClick={() => { setCount(count + 1) }}>点击</button>
      <button onClick={() => { setShow(!show) }}>{show ? '隐藏' : '显示'}</button>
      {
        show ? <TestUnMounted /> : null
      }
    </div>
  )
}

export default UseEffectExample
