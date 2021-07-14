/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Background from '../images/body-BG.jpg';

import Header from "./header"
import FooterNav from "./footerNav"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author
        }
      }
      file(name: {eq: "header-logo"}) {
        id
        childImageSharp {
          fixed(width: 270, height: 125) {
          ...GatsbyImageSharpFixed
        }
        }
      }
    }
  `)

  return (
    <>
      <Header 
        siteTitle={data.site.siteMetadata?.title || `Title`} 
        siteAuthor={data.site.siteMetadata?.author} 
        siteLogo={data.file.childImageSharp.fixed} 
      />
      <div
        style={{
          margin: `0 auto`,
          // maxWidth: 960,
          // padding: `0 1.0875rem 1.45rem`,
          padding: `0 2rem 2rem`,
          backgroundColor: `#693B1A`,
          backgroundImage: `url(${Background})`,
          backgroundSize: `cover`,
          backgroundPosition: `bottom`,
          minHeight: `100vh`,
        }}
      >
        <main
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            // padding: `0 1.0875rem 1.45rem`,
            padding: `0`,
            backgroundColor: `#40210b`,
          }}
        >{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
            margin: `0 auto`,
            maxWidth: 960,
          }}
        >
          <FooterNav/>
          <div className="footerBottom">
            © {new Date().getFullYear()},
            {` `}
            <a href="http://andrewjfleming.com/">{data.site.siteMetadata?.author}</a>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
