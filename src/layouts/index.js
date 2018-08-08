import React from 'react';
import { injectGlobal, css } from 'react-emotion';
import PropTypes from 'prop-types';
import { TiHome } from 'react-icons/lib/ti';
import Navigation from '../components/Navigation';
import { Link } from '../components/Misc';

/* eslint-disable */
injectGlobal`
  * {
      box-sizing: border-box;
  };
  a {
    text-decoration: none;
    color: inherit;
  };
  a:hover {
    cursor: pointer;
  };
`;
/* eslint-enable */

const homeStyle = css`
  box-shadow: none;
  font-size: 2rem;
  z-index: 1000;
  position: absolute;
  left: 72px;
  top: 16px;
`;

const Layout = ({ children }) => (
  <div>
    <Navigation />
    <div>
      <Link to="/" className={homeStyle}>
        <TiHome />
      </Link>
    </div>
    {children()}
  </div>
);

Layout.propTypes = {
  children: PropTypes.func.isRequired
};

export default Layout;
