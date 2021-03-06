import React, { useState, useRef, useEffect } from 'react'

import styles from '../Example.module.scss'

const UseRefExample = () => {
  const [text, setText] = useState('do something')
  const inputElem = useRef(null)
  const clickHandle = () => {
    console.log(inputElem.current.value)
    inputElem.current.value = ''
    // text = setText('')
  }
  // 保存text
  useEffect(() => {
    console.log(text)
  })

  return (
    <div className={styles.main}>
      <input
        type="text"
        ref={inputElem}
        value={text}
        onChange={(e) => { setText(e.target.value) }} />
      <button onClick={clickHandle}>提交</button>
    </div>
  )
}

export default UseRefExample
