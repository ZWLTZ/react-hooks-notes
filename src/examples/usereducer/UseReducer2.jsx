import React from 'react'

import styles from './UseReducer.module.scss'
import { ReducerColor } from './ReducerColor'
import Buttons from './Buttons'
import ShowContent from './ShowContent'


const ReducerParent = () => {
  return (
    <div className={styles.main}>
      <ReducerColor>
        <ShowContent />
        <Buttons />
      </ReducerColor>
    </div>
  )
}

export default ReducerParent
