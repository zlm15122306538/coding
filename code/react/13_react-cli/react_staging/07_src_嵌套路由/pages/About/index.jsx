import React, { Component } from 'react';

class About extends Component {
  render() {
    console.log('About',this.props);
    return (
      <h3>我是about组件</h3>
    );
  }
}

export default About;