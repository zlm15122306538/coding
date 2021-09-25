import React, { Component } from 'react';
import './index.css'
class List extends Component {
  render() {
    const {userList} = this.props
    return (
      <div className="row">
        {
          userList.map(item=>{
            return(
              <div className="card" key={item.id}>
                <a href={item.html_url} target="_blank" rel="noreferrer">
                  <img alt="head_portrait" src={item.avatar_url} style={{width: 100 + 'px'}}/>
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