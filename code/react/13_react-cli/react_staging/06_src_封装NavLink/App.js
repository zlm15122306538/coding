import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Header from './components/Header'
import MyNavLink from './components/MyNavLink'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="row">
            <div className="col-xs-offset-2 col-xs-8">
              <Header a={3} />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-2 col-xs-offset-2">
              <div className="list-group">
                {/* 在原生HTML中靠a标签跳转不同的页面 */}
                {/* <a className="list-group-item" href="./about.html">About</a>
                <a className="list-group-item active" href="./home.html">Home</a> */}
                {/* 在react中靠路由链接实现切换组件--编写路由链接 */}
                {/* activeClassName配置点击标签时的类名 */}
                {/* <NavLink activeClassName='light' className="list-group-item" to="/about">About</NavLink>
                <NavLink activeClassName='light' className="list-group-item" to="/home">Home</NavLink> */}
                {/* 通过this.props.children可以获取标签体内容 */}
                <MyNavLink to='/about' title='About' a='1' b='2'>About</MyNavLink>
                <MyNavLink to='/home' title='Home'>Home</MyNavLink>
              </div>
            </div>
            <div className="col-xs-6">
              <div className="panel">
                <div className="panel-body">
                  {/* 注册路由 */}
                  <Route path='/about' component={About}/>
                  <Route path='/home' component={Home}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
