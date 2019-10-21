import React from 'react'
import styles from './Example.module.scss'

import ExampleClass from './ExampleClass'
import UserStateExample from './hooks/UseState'
// import ExampleUseState from '../components/ExampleUseState'
// import ExampleEffect from '../components/ExampleEffect'
// import ExampleContext from '../components/ExampleContext'
// import ExampleReducer from '../components/ExampleUseReducer'
// import ReducerParent from '../components/UseReducer/UseReducer'


const Index = () => (
  <div className={styles.container}>
      <h3>class component</h3>
      <ExampleClass />
      <h3>hooks-useState</h3>
      <UserStateExample />
      {/* <h3>hooks-useState</h3>
      <ExampleUseState />
      <h3>hooks-useEffect</h3>
      <ExampleEffect />
      <h3>hooks-useContext</h3>
      <ExampleContext />
      <h3>hooks-useReducer1</h3>
      <ExampleReducer />
      <h3>hooks-userReducer2</h3>
      <ReducerParent /> */}
    </div>
)
 
export default Index
