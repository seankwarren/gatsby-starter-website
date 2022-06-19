import React, { useEffect, useState }/* , { useState, useEffect }  */ from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';


const StyledHeroSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    align-items: flex-start;
    min-height: 100vh;
    padding-top: 0;
    padding-left: 20px;
    padding-right: 20px;
    @media (max-width: 640px) and (min-height: 700px) {
        padding-bottom: 10vh;
    }
    h1 {
        margin: 0 0 10px 4px;
        color: var(--green);
        font-family: var(--font-mono);
        font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
        font-weight: 400;
        @media (max-width: 640px) {
        margin: 0 0 20px 2px;
        }
    }
    h2 {
        font-weight: 600;
        color: var(--accent-main);
    }
    h3 {
        margin-top: 10px;
        font-weight: 500;
        font-size: clamp(var(--fz-xxl), 5vw, var(--fz-heading));
        color: var(--accent-flair);
        line-height: 0.9;
    }
    p {
        font-size: var(--fz-xxl);
        margin: 20px 0 0;
        max-width: 640px;
        color: var(--body)
    }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true),[]);

  const one = <h1>Hi, my name is</h1>;
  const two = <h2 className="big-heading">Sean Warren.</h2>;
  const three = <h3 className="big-heading">I build things from code and wood.</h3>;
  const four = (
    <>
      <p>
        I’m a software engineer specializing in web development for scientific computing and data visualization tools, enabling scientists and engineers to understand and utilize data more effectively.
      </p>
      <p>
        I'm a woodworker specializing in minimalist, hardwood furniture for a more pragmatic and sustainable home, embracing a build-it-for-life lifestyle.
      </p>
    </>
  );

  const items = [one, two, three, four];

  return (
    <StyledHeroSection>
        <>
        <TransitionGroup>
          {isMounted && (
            items.map((item, i) => (
              <CSSTransition classNames="fade" key={i} timeout={1000}>
                <div key={i} style={{transitionDelay: "200ms"}}>{item}</div>
              </CSSTransition>
          )))}
        </TransitionGroup>
        </>
    </StyledHeroSection>
  );
};

export default Hero;