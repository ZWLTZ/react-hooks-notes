import React, { useState, useMemo } from 'react'

import styles from '../Example.module.scss'

//1 子组件内部的方法，不使用useMemo时：count和uid变化都会调用！
// 只想在uid变化时候才调用，类式shouldComponentUpdate生命周期的过滤
const changeUid = (id) => {
  console.log(`我被调用了。`)
  return (
    <React.Fragment>{`${id}--${Date.now()}`}</React.Fragment>
  )
}
// 子组件
const ChildrenComponent = ({ num, uid }) => {
  // 1.未使用useMemo
  // const uidStr = changeUid(uid)
  // 2.使用: param1：回调函数，param2：需要监听哪个参数
  const uidStr = useMemo(() => changeUid(uid), [uid])
  return (
    <React.Fragment>
      <div>你的数量是：{num}次.</div>
      <div>{uidStr}</div>
    </React.Fragment>
  )
}

// 父组件
const UseMemoExample = () => {
  const [count, setCount] = useState(0)
  const [uid, setUid] = useState('none')
  return (
    <div className={styles.main}>
      <p>You clicked {count} times. Id is {uid}</p>
      <button onClick={() => { setCount(count + 1) }}>计数</button>
      <button onClick={() => { setUid(`${Math.random().toString(36).slice(2)}`) }}>随机</button>
      <ChildrenComponent num={count} uid={uid} />
    </div>
  )
}

export default UseMemoExample
