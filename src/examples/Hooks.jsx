import React from 'react'
import styles from './Example.module.scss'

import ExampleClass from './ExampleClass'
import UserStateExample from './hooks/UseState'
import UseEffectExample from './hooks/UseEffect'
import UseContextExample from './hooks/UseContext'
import UseReducerExample from './hooks/UseReducer'


const Index = () => (
  <div className={styles.container}>
      <h3>class component</h3>
      <ExampleClass />
      <h3>hooks-useState</h3>
      <UserStateExample />
      <h3>hooks-useEffect</h3>
      <UseEffectExample />
      <h3>hooks-useContext</h3>
      <UseContextExample />
      <h3>hooks-useReducer-1</h3>
      <UseReducerExample />
    </div>
)
 
export default Index
