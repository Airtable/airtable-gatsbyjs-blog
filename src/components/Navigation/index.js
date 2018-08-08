import React, { Component } from 'react';
import { css } from 'react-emotion';
import { slide as Menu } from 'react-burger-menu';
import { Link } from '../Misc';

const linkStyles = css`
  box-shadow: none;
`;

const menuStyles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '25px',
    height: '18px',
    left: '36px',
    top: '36px'
  },
  bmBurgerBars: {
    background: '#333',
    height: 1.5,
    opacity: 1
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#333'
  },
  bmMenu: {
    background: 'white',
    padding: '2.5em 1.5em 0',
    fontSize: '1.25rem',
    lineHeight: '2.125rem'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: 'black',
    padding: '0.8em'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
};

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileActive: false
    };
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    if (this.state.mobileActive) {
      this.setState({ mobileActive: false });
    } else {
      this.setState({ mobileActive: true });
    }
  }

  render() {
    return (
      <Menu styles={menuStyles}>
        <Link className={linkStyles} to="/">
          Home
        </Link>
        <Link className={linkStyles} to="/about">
          About
        </Link>
        <Link className={linkStyles} to="/blog">
          Blog
        </Link>
      </Menu>
    );
  }
}

export default Navigation;
