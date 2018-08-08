import React from 'react';
import styled, { css } from 'react-emotion';
import GatsbyLink from 'gatsby-link';

const timestamp = css`
  color: #767676;
  font-size: 0.9rem;
  font-family: 'Cousine', monospace;
  margin: 0 0 4px;
`;

const Timestamp = styled.time`
  ${timestamp};
`;

const link = css`
  box-shadow: inset 0 -5px 0 rgba(0, 96, 193, 0.25);
  -webkit-transition: box-shadow 0.4s ease-in-out;
  transition: box-shadow 0.4s ease-in-out;
  &:hover {
    box-shadow: inset 0 -300px 0 rgba(0, 96, 193, 0.25);
  }
  &:focus {
    outline: 0;
  }
`;

/* eslint-disable react/prop-types */
const Link = props => (
  <GatsbyLink className={link} {...props}>
    {props.children}
  </GatsbyLink>
);
/* eslint-enable */

export { Timestamp, Link };
