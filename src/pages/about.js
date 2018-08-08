/* eslint-disable no-undef, react/prop-types */
import React from 'react';
import Img from 'gatsby-image';
import { css } from 'react-emotion';
import { Box } from '../components/Layout';

const imgStyle = css`
  border-radius: 5px;
  margin-bottom: 1.7rem;
`;

const About = ({ data }) => {
  const { imageSharp } = data;
  return (
    <Box>
      <Box
        width={[1, 1, 1 / 2]}
        m={['3.5rem 0 0 0', '3.5rem 0 0 0', '3.5rem auto 0 auto']}
        px={[3, 3, 0]}
      >
        <h1>About</h1>
        <Img className={imgStyle} alt="Picture of X" sizes={imageSharp.sizes} />
        <p>This is an example showing the use of &quot;gatsby-image&quot;.</p>
      </Box>
    </Box>
  );
};

export const pageQuery = graphql`
  query AboutQuery {
    imageSharp(id: { regex: "/about/" }) {
      sizes(maxWidth: 1000) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;

export default About;
