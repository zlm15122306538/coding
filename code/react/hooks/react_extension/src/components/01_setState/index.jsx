import React, { Component } from 'react'

export default class Demo extends Component {
  state = {
    count: 0
  }
  add = ()=>{
    // 1.对象式的setState
    /* const {count} = this.state
    this.setState({count: count+1},()=>{
      // console.log(count);
    })
    console.log(count); */
    // 函数式的setState
    this.setState((state,props)=>{
      console.log(state,props);
      return {count: state.count+1}
    })
  }
  render() {
    return (
      <div>
        <h2>当前求和为：{this.state.count}</h2>
        <button onClick={this.add}>+1</button>
      </div>
    )
  }
}
