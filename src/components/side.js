import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { loaderDelay } from '@utils';

const StyledSideElement = styled.div`
  width: 40px;
  position: fixed;
  bottom: 0;
  left: ${props => (props.orientation === 'left' ? '40px' : 'auto')};
  right: ${props => (props.orientation === 'left' ? 'auto' : '40px')};
  z-index: 10;
  color: var(--body);
  @media (max-width: 1080px) {
    left: ${props => (props.orientation === 'left' ? '20px' : 'auto')};
    right: ${props => (props.orientation === 'left' ? 'auto' : '20px')};
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const Side = ({ children, isHome, orientation }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {setIsMounted(true)}, []);

  return (
    <StyledSideElement orientation={orientation}>
        <TransitionGroup component={null}>
            {isMounted && (
            <CSSTransition classNames={'fade'} timeout={ loaderDelay } style={{transitionDelay: "100ms"}}>
              {children}
            </CSSTransition>
            )}
        </TransitionGroup>
    </StyledSideElement>
  );
};

Side.propTypes = {
  children: PropTypes.node.isRequired,
  isHome: PropTypes.bool,
  orientation: PropTypes.string,
};

export default Side;