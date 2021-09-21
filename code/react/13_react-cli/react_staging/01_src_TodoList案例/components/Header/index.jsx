import React, { Component } from 'react';
import {nanoid} from 'nanoid'
import PropTypes from 'prop-types'
import './index.css'

class Header extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }
  getInfo = (event)=>{
    if (event.keyCode !== 13) {
      return
    }
    if (event.target.value.trim() ==='') {
      alert('输入不能为空')
      event.target.value = ''
      return
    }
    const todoObj = {id: nanoid(),title: event.target.value, done: false}
    this.props.addTodo(todoObj)
    event.target.value = ''
  }
  render() {
    return (
      <div>
        <div className="todo-header">
          <input onKeyUp = {this.getInfo} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
        </div>
      </div>
    );
  }
}

export default Header;