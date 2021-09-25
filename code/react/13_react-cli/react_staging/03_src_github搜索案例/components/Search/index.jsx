import React, { Component } from 'react';
import './index.css'
import axios from 'axios'
class Search extends Component {
  state = {
    msg: ''
  }
  search = ()=>{
    const {msg} = this.state
    const {getUserInfo} = this.props
    axios.get(`http://localhost:3000/api1/search/users?q=${msg}`).then(
      response=>{
        getUserInfo(response.data.items)
      }
    ).catch((error)=>{
      console.log('error',error);
    })
  }
  handleChange = (event)=>{
    this.setState({msg: event.target.value})
  }
  render() {
    return (
      <div>
        <section className="jumbotron">
          <h3 className="jumbotron-heading">Search Github Users</h3>
          <div>
            <input onChange = {this.handleChange} type="text" placeholder="enter the name you search"/>&nbsp;<button onClick={this.search}>Search</button>
          </div>
        </section>
      </div>
    );
  }
}

export default Search;