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
  const isHome = location.pathname === '/';
  const [isLoading, setIsLoading] = useState(isHome);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 3400);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (isLoading) {
      return;
    }

    if (location.hash) {
      //const id = location.hash.substring(1); // location.hash without the '#'
      setTimeout(() => {
        const el = document.getElementById('about');
        if (el) {
          el.scrollIntoView();
          el.focus();
        }
      }, 0);
    }

    //handleExternalLinks();
  }, [isLoading]);

  console.log(isLoading)
  return (
    <>
      {/* <Head /> */}

      <div id="root">
        <GlobalStyle />  
        {isLoading && isHome ? (
          <Loader finishLoading={() => setIsLoading(!isLoading)} />
        ) : (
          <>
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
