import React, { Component } from 'react';
// import qs from 'querystring'
class Details extends Component {
  render() {
    // 使用params参数
    // const {id,title} = this.props.match.params
    // 使用search参数
    /* const {search} = this.props.location
    const {id,title} = qs.parse(search.slice(1)) */
    console.log('details',this.props);
    const {id,title} = this.props.location.state || {}
    return (
      <div>
        <h3>ID：{id}</h3>
        <h3>Title：{title}</h3>
      </div>
    );
  }
}

export default Details;