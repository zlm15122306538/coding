import React, { Component } from 'react';

class Header extends Component {
  render() {
    console.log('Header',this.props);
    return (
      <div>
        <h2>react-router-dom</h2>
      </div>
    );
  }
}

export default Header;