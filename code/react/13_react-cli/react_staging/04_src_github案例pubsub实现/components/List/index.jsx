import React, { Component } from 'react';
import PubSub from 'pubsub-js'
import './index.css'

class List extends Component {
  state = {
    userList: []
  }
  componentDidMount(){
    PubSub.subscribe('userInfo',(_,data)=>{
      console.log('search',data);
      this.setState({userList: data})
    })
  }
  render() {
    const {userList} = this.state
    return (
      <div className="row">
          {
            userList.map((item)=>{
              return(
                <div className="card" key={item.id}>
                  <a href={item.html_url} target="_blank" rel="noreferrer">
                    <img alt='head_portrait' src={item.avatar_url} style={{width: '100px'}}/>
                  </a>
                  <p className="card-text">reactjs</p>
                </div>
              )
            })
          }
    </div>
    );
  }
}

export default List;