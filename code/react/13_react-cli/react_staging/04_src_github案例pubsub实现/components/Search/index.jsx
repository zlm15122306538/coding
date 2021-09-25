import React, { Component } from 'react';
import axios from 'axios';
import PubSub from 'pubsub-js'

class Search extends Component {
  state = {
    keyword: ''
  }
  searchUsers = ()=>{
    const {keyword} = this.state
    axios.get(`http://localhost:3000/api1/search/users?q=${keyword}`).then(
      (response)=>{
        // console.log('success',response.data);
        PubSub.publish('userInfo',response.data.items)
      },
      (error)=>{
        console.log('error',error);
      }
    )
  }
  inputMsg = (event)=>{
    this.setState({keyword: event.target.value})
  }
  render() {
    return (
      <section className="jumbotron">
          <h3 className="jumbotron-heading">Search Github Users</h3>
          <div>
            <input onChange={this.inputMsg} type="text" placeholder="enter the name you search"/>&nbsp;<button onClick={this.searchUsers}>Search</button>
          </div>
      </section>
    );
  }
}

export default Search;