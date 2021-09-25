import React, { Component } from 'react'
import './App.css'
import Search from './components/Search'
import List from './components/List'

export default class App extends Component {
  state = {
    userList: []
  }
  getUserInfo = (userList)=>{
    // console.log('app',userList);
    this.setState({userList})
  }
  render() {
    const {userList} = this.state
    return (
      <div className="container">
        <Search getUserInfo = {this.getUserInfo}/>
        <List userList = {userList}/>
      </div>
    )
  }
}
