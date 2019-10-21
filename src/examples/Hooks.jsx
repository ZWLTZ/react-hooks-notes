import React from 'react'
import styles from './Example.module.scss'

import ExampleClass from './ExampleClass'
import UseStateExample from './hooks/UseState'
import UseEffectExample from './hooks/UseEffect'
import UseContextExample from './hooks/UseContext'
import UseReducerExample from './hooks/UseReducer'
import ReducerParent from './usereducer/UseReducer2'
import UseMemoExample from './usememo/UseMemo'
import UseRefExample from './useref/UseRefDom'

const Index = () => (
  <div className={styles.container}>
      <h3>class component</h3>
      <ExampleClass />
      <h3>hooks-useState</h3>
      <UseStateExample />
      <h3>hooks-useEffect</h3>
      <UseEffectExample />
      <h3>hooks-useContext</h3>
      <UseContextExample />
      <h3>hooks-useReducer-1</h3>
      <UseReducerExample />
      <h3>hooks-userreducer-2</h3>
      <ReducerParent />
      <h3>hooks-useMemo</h3>
      <UseMemoExample />
      <h3>hooks-useRef</h3>
      <UseRefExample />
    </div>
)
 
export default Index
