import React from 'react';
import { Link } from 'react-router-dom';

const logo = require('../icons/frontendlogo.png');

class Header extends React.Component {
  render() {
    return (
      <header>
        <Link to="/">
          <img src={ logo } alt="FrontEnd Online Store Logo" />
        </Link>
      </header>
    );
  }
}

export default Header;
