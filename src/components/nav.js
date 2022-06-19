import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled, { css } from 'styled-components';
import { navLinks } from '@config';
import { loaderDelay } from '@utils';
import Menu from './menu';
import Icon from '@components/icons/icon.svg';
import { useScrollDirection } from '@hooks';

const StyledLogo = styled.svg`
box-sizing: border-box;

path {
  stroke: var(--accent-main);
  stroke-width: 3px;
  fill: transparent;
  
}

svg:hover path {
  stroke: var(--accent-flair);
  stroke-width: 3.5px;
}
`

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 11;
    padding: 0px 40px;
    width: 100%;
    height: var(--nav-scroll-height);
    background-clip: border-box;
    background: var(--dark);
    opacity: 90%;
    filter: none !important;
    pointer-events: auto !important;
    user-select: auto !important;
    backdrop-filter: blur(10px);
    transition: var(--transition);
    box-sizing: border-box;
    box-shadow: 0 0 10px var(--dark-shadow);
    
    @media (max-width: 1080px) {
        padding: 0 40px;
    }

    @media (max-width: 768px) 
        padding: 0 25px;
    }

    @media {
      ${props =>
      props.scrollDirection === 'up' &&
        !props.scrolledToTop &&
        css`
          transform: translateY(0px);
      `};
      ${props =>
      props.scrollDirection === 'down' &&
        !props.scrolledToTop &&
        css`
          transform: translateY(calc(var(--nav-scroll-height) * -1));
      `};
    }
`;

const StyledNav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    width: 100%;
    height: 100%;
    background-color: transparent;
    font-family: var(--font-mono);
    counter-reset: item 0;
    z-index: 12;
    .logo {
      display: flex;
      justify-content: center;
      align-items: center;
      transform: translateY(40px);
      a {
        color: var(--accent-main);
        width: 42px;
        height: 42px;
        svg {
          transition: var(--transition);
          user-select: none;
        }
      }
    }
`;

const StyledLinks = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
  ol {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    margin: 0;
    list-style: none;
    li {
      margin: 0 5px;
      position: relative;
      counter-increment: item 1;
      font-size: var(--fz-xs);
      a {
        padding: 10px;
        text-decoration: none;
        color: var(--body);
        &:before {
          content: '0' counter(item) '.';
          margin-right: 5px;
          color: var(--accent-main);
          font-size: var(--fz-xxs);
          text-align: right;
        }
        &:hover:before {
            color: var(--accent-flair);
            font-weight: bold;
            text-decoration: none;
        } 
      }  
    }
  }
  .resume-button {
    box-sizing: border-box;
    display: flex;
    color: var(--accent-main);
    background-color: transparent;
    border: 1px solid var(--accent-main);
    border-radius: var(--border-radius);
    padding: 12px 16px;
    font-size: var(--fz-xs);
    font-family: var(--font-mono);
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    margin-left: 15px;
    font-size: var(--fz-xs);
    &:hover {
      color: var(--accent-flair);
      border: 2px solid var(--accent-flair);
      margin: -1px;
      margin-left: 14px;
      font-weight: bold;
    }
  }
`;

const Nav = ({ isHome }) => {
  const [isMounted, setIsMounted] = useState(false);
  const scrollDirection = useScrollDirection('down');
  const [scrolledToTop, setScrolledToTop] = useState(true);
  const timeout = 1000;
  const fadeDownClass = 'fadedown';
  const fadeClass = 'fade';

const handleScroll = () => {
  setScrolledToTop(window.pageYOffset < 50);
}

  useEffect(() => {
    setIsMounted(true);

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('scroll', handleScroll);
    };
  },[])

  const Logo = (
    <a href="/" className="logo" tabIndex="-1">
    <StyledLogo>
      <Icon />
    </StyledLogo>
    </a>  
  );

  const ResumeLink = (
    <a className="resume-button" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
      Resume
    </a>
  );

  return (
  <>
    {/* <GlobalStyle /> */}
    <StyledHeader scrollDirection={scrollDirection} scrolledToTop={scrolledToTop}>
      <StyledNav>
        <TransitionGroup component={null}>
          {isMounted && (
          <CSSTransition classNames={fadeClass} timeout={timeout}>
            {Logo}
          </CSSTransition>
          )}
        </TransitionGroup>

        <StyledLinks>
          <ol>
            <TransitionGroup component={null}>
              {isMounted && 
                navLinks && 
                navLinks.map(({ url, name }, i) => (
                  <CSSTransition key={i} classNames="fadedown" timeout={timeout}>
                    <li key={i} style={{ transitionDelay: `${(i+1) * 100}ms` }}>
                      <Link to={url}>{name}</Link>
                    </li>
                  </CSSTransition>
                ))}
            </TransitionGroup>
          </ol>

          <TransitionGroup component={null}>
            {isMounted && (
            <CSSTransition classNames={fadeDownClass} timeout={timeout}>
              <div style={{ transitionDelay: `${(navLinks.length+1) * 100}ms` }}>
                {ResumeLink}
              </div>
            </CSSTransition>
            )}
          </TransitionGroup>
        </StyledLinks>
        <Menu />
      </StyledNav>
    </StyledHeader>
  </>
  );
};

Nav.propTypes = {
  isHome: PropTypes.bool,
};

export default Nav;