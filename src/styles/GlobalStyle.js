import { createGlobalStyle } from 'styled-components';
import variables from './variables';
import TransitionStyles from './TransitionStyles';

const GlobalStyle = createGlobalStyle`
  ${variables};
  ${TransitionStyles};
  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: var(--dark);
    color: var(--body);
    font-family: var(--font-sans);
    font-size: var(--fz-xl);
    line-height: 1.3;
  }

  html {
    box-sizing: border-box;
    width: 100%;
    scroll-behavior: smooth;
  }
  
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  section {
    margin: 0 auto;
    padding: 100px 0;
    max-width: 640px;
    @media (max-width: 768px) {
      padding: 80px 0;
    }
    @media (max-width: 480px) {
      padding: 60px 0;
    }
  }
  h1, h2, h3, h4, h5, h6 {
    margin: 0 0 10px 0;
    font-weight: 600;
    color: var(--body);
    line-height: 1.1;
  }
  .big-heading {
    margin: 0;
    font-size: clamp(30px, 8vw, 60px);
  }
  .medium-heading {
    margin: 0;
    font-size: clamp(40px, 8vw, 50px);
  }

  .numbered-heading {
    display: flex;
    align-items: center;
    position: relative;
    margin: 10px 0 40px;
    width: 100%;
    font-size: clamp(26px, 5vw, var(--fz-heading));
    white-space: nowrap;
    &:before {
      position: relative;
      bottom: -4px;
      counter-increment: section;
      content: '0' counter(section) '.';
      margin-right: 10px;
      color: var(--green);
      font-family: var(--font-mono);
      font-size: clamp(var(--fz-md), 3vw, var(--fz-xl));
      font-weight: 400;
      @media (max-width: 480px) {
        margin-bottom: -3px;
        margin-right: 5px;
      }
    }

`;

export default GlobalStyle;