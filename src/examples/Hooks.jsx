import React from 'react'
import styles from './Example.module.scss'

import ExampleClass from './ExampleClass'
import UserStateExample from './hooks/UseState'
import UseEffectExample from './hooks/UseEffect'


const Index = () => (
  <div className={styles.container}>
      <h3>class component</h3>
      <ExampleClass />
      <h3>hooks-useState</h3>
      <UserStateExample />
      <h3>hooks-useEffect</h3>
      <UseEffectExample />
    </div>
)
 
export default Index
