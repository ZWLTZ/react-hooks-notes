import React, { useContext } from 'react'

import styles from './UseReducer.module.scss'
// 4.3 引入 color store, type
import { ColorContext, CHANGE_COLOR } from './ReducerColor'

const Buttons = () => {
  // 4.4 引入dispatch
  const { dispatch } = useContext(ColorContext)
  // console.log(useContext(ColorContext))
  return (
    <div className={styles.btnWrap}>
      <button onClick={() => { dispatch({ type: CHANGE_COLOR, color: 'royalblue' }) }}>蓝色</button>
      <button onClick={() => { dispatch({ type: CHANGE_COLOR, color: 'seagreen' }) }}>红色</button>
    </div>
  )
}

export default Buttons
