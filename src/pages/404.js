import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Layout } from '@components';
// import { GlobalStyle } from "@styles"

const StyledMainContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const StyledTitle = styled.h1`
  color: var(--green);
  font-family: var(--font-mono);
  font-size: clamp(100px, 25vw, 200px);
  line-height: 1;
`;
const StyledSubtitle = styled.h2`
  font-size: clamp(30px, 5vw, 50px);
  font-weight: 400;
`;

const NotFoundPage = ({ location }) => {

  const content = (
    <StyledMainContainer className="fillHeight">
      <StyledTitle>404</StyledTitle>
      <StyledSubtitle>Page Not Found</StyledSubtitle>
    </StyledMainContainer>
  );

  return (
    <Layout location={location}>
      {/* <Helmet title="Page Not Found" /> */}
        <>{content}</>
    </Layout>
  );

}

export default NotFoundPage