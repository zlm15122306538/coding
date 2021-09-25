import React, { Component } from 'react';
import {Route,Redirect,Switch} from 'react-router-dom'
import Message from './Message'
import News from './News'
import MyNavLink from '../../components/MyNavLink'

class Home extends Component {
  render() {
    return (
      <div>
        <ul className="nav nav-tabs">
          <li>
            <MyNavLink to='/home/news'>News</MyNavLink>
          </li>
          <li>
            <MyNavLink to='/home/message'>Message</MyNavLink>
          </li>
        </ul>
        <Switch>
          <Route path='/home/news' component={News}></Route>
          <Route path='/home/message' component={Message}></Route>
          <Redirect to='/home/news'/>
        </Switch>
      </div>
    );
  }
}

export default Home;