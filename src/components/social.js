import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { socialMedia } from '@config';
import { Side } from '@components';
import Icon from '@components/icons/icon.svg';

const StyledSocialList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
  // &:after {
  //   content: '';
  //   display: block;
  //   width: 1px;
  //   height: 90px;
  //   margin: 0 auto;
  //   background-color: var(--accent-main);
  // }
  li {
    &:last-of-type {
      margin-bottom: 20px;
    }
    a {
      padding: 10px;
      color: var(--accent-main);
      text-decoration: none;
      font-size: var(--fz-xxs);
      font-family: var(--font-mono);
      
      // svg {
      //   width: 20px;
      //   height: 20px;
      // }
    }
    &:hover,
    &:focus {
      transform: translateX(3px);
    }
  }
`;

const Social = ({ isHome }) => (
<Side isHome={isHome} orientation="left">
    <StyledSocialList>
    {socialMedia &&
        socialMedia.map(({ url, name }, i) => (
        <li key={i}>
            <a href={url} aria-label={name} target="_blank" rel="noreferrer">
                {name}
            </a>
        </li>
        ))}
    </StyledSocialList>
</Side>
);

Social.propTypes = {
isHome: PropTypes.bool,
};

export default Social;