import React, { Component } from 'react';
import './index.css'

class Item extends Component {
  state = {
    mouse: false
  }
  handleMouse = (flag)=>{
    this.setState({mouse: flag})
  }
  handleChange = (value,id)=>{
    // console.log(value,id);
    this.props.updateChecked(value,id)
  }
  hadleDelete = (id)=>{
    const {deleteTodo} = this.props
    return ()=>{
      deleteTodo(id)
    }
  }
  render() {
    const { title, done, id } = this.props
    return (
      <div>
        <li
          onMouseEnter = {()=>{this.handleMouse(true)}}
          onMouseLeave = {()=>{this.handleMouse(false)}}
          style = {{backgroundColor: this.state.mouse ? '#eee' : '#fff'}}
        >
            <label>
              <input type="checkbox" checked={done} onChange = {(event)=>{this.handleChange(event.target.checked,id)}}/>
              <span>{title}</span>
            </label>
            <button onClick = {this.hadleDelete(id)} className="btn btn-danger" style={{display: this.state.mouse ? 'block' : 'none'}}>删除</button>
          </li>
      </div>
    );
  }
}

export default Item;