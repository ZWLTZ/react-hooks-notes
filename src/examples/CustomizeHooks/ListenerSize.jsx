import React, { useState, useEffect, useCallback } from 'react'

import styles from '../Example.module.scss'

function useWinSize() {
  // 初始化
  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
  })
  // 生命事件,useCallback去除副作用
  const onResize = useCallback(() => {
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
    })
  }, [])
  // 注册事件
  useEffect(() => {
    window.addEventListener('resize', onResize)
    // 销毁移除事件
    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [onResize])
  return size
}

const CustomizeUseSizeExample = () => {
  const size = useWinSize()
  return (
    <div className={styles.main}>
      <p>缩放浏览器大小，当前宽高是：{size.width} x {size.height}</p>
    </div>
  )
}

export default CustomizeUseSizeExample