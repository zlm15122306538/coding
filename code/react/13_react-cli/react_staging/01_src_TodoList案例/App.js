import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'
export default class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: '吃饭',
        done: true
      },
      {
        id: 2,
        title: '睡觉',
        done: true
      },
      {
        id: 3,
        title: '写代码',
        done: false
      },
    ]
  }
  addTodo = (todoObj)=>{
    console.log('app',todoObj);
    const {todos} = this.state
    const newTodos = [todoObj,...todos]
    this.setState({todos: newTodos})
  }
  updateChecked = (value,id)=>{
    const {todos} = this.state
    const newTodos = todos.map((todo)=>{
      if (todo.id === id) {
        return {...todo,done:value}
      } else {
        return todo
      }
    })
    this.setState({todos:newTodos})
  }
  deleteTodo = (id)=>{
    const {todos} = this.state
    const newTodos = todos.filter((todo)=>{
      return todo.id !== id
    })
    this.setState({todos: newTodos})
  }
  checkAllTodos = (value)=>{
    const {todos} = this.state
    console.log('app',value);
    const newTodos = todos.map((todo)=>{
      return {...todo,done:value}
    })
    this.setState({todos: newTodos})
  }
  deleteDoneTodo = ()=>{
    const {todos} = this.state
    const newTodos = todos.filter((todo)=>{
      return todo.done !== true
    })
    this.setState({todos: newTodos})
  }
  render() {
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo = {this.addTodo}/>
          {/* 父组件向子组件传值 */}
          <List updateChecked = {this.updateChecked} deleteTodo = {this.deleteTodo} todos={this.state.todos}/>
          <Footer todos = {this.state.todos} checkAllTodos = {this.checkAllTodos} deleteDoneTodo = {this.deleteDoneTodo}/>
      </div>
    </div>
    );
  }
}

