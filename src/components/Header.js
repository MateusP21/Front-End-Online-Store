import React from 'react';

const logo = require('../icons/frontendlogo.png');

class Header extends React.Component {
  render() {
    return (
      <header>
        <img src={ logo } alt="FrontEnd Online Store Logo" />
      </header>
    );
  }
}

export default Header;
