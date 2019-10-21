import React, { useContext } from 'react'
// 2. color store 上下文
import { ColorContext } from './ReducerColor'
import styles from './UseReducer.module.scss'

const ShowContent = ()=> {
  // 3. 接收 color
  const { color } = useContext(ColorContext)
  return (
    <div className={styles.showWrap}>
      <p  style={{color: color, padding: '15px'}}>我的字体颜色是：{color}</p>
    </div>
  )
}

export default ShowContent
