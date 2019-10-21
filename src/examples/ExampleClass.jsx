import React, { Component } from 'react'

import styles from './Example.module.scss'

class ExampleClass extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
  }

  componentDidMount() {
    console.log(`class component mounted.`)
  }

  componentDidUpdate() {
    console.log(`class component updated.`)
  }

  addCount = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  
  render() { 
    return (
      <div className={styles.main}>
        <p>You clicked {this.state.count} times.</p>
        <button onClick={this.addCount}>点击</button>
      </div>
    )
  }
}
 
export default ExampleClass
