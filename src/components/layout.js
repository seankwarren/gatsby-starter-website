/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Loader, Nav, Social, Email} from "@components"
import { GlobalStyle } from "@styles"

const Layout = ({ children, location }) => {
  if (location && location !== "undefined"){
    const isHome = location.path === '/';
  }
  
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 3400);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {/* <Head /> */}

      <div id="root">
        <GlobalStyle />  
        {isLoading ? (
          <Loader finishLoading={() => setIsLoading(!isLoading)} />
        ) : (
          <>
          <GlobalStyle /> 
          <Nav></Nav>
          <Social></Social>
          <Email></Email>
          <div>
            <main>
              {children}
            </main>
            <footer />
          </div>
          </>
        )}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
}

export default Layout
