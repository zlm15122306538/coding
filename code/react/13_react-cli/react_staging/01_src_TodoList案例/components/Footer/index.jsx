import React, { Component } from 'react';
import './index.css'

class Fotter extends Component {
  handleCheckAll = (event)=>{
    const {checkAllTodos} = this.props
    console.log(event.target.checked);
    checkAllTodos(event.target.checked)
  }
  clearDoneTodo = ()=>{
    const {deleteDoneTodo} = this.props
    deleteDoneTodo()
  }
  render() {
    const {todos} = this.props
    const count = todos.length
    const doneCount = todos.reduce((pre,current)=>{
      return pre + (current.done ? 1 : 0)
    },0)
    return (
      <div>
        <div className="todo-footer">
          <label>
            <input type="checkbox" onChange={this.handleCheckAll} checked={count === doneCount && count !== 0 ? true : false}/>
          </label>
          <span>
            <span>已完成{doneCount}</span> / 全部{count}
          </span>
          <button onClick = {this.clearDoneTodo} className="btn btn-danger">清除已完成任务</button>
        </div>
      </div>
    );
  }
}

export default Fotter;