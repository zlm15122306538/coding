import React, { Component } from 'react';
import Item from '../Item'
import './index.css'

class List extends Component {
  render() {
    const {todos, updateChecked, deleteTodo} = this.props
    return (
      <div>
        <ul className="todo-main">
          {
            todos.map((todo)=>{
              return <Item key={todo.id} {...todo} updateChecked={updateChecked} deleteTodo = {deleteTodo} />
            })
          }
        </ul>
      </div>
    );
  }
}

export default List;