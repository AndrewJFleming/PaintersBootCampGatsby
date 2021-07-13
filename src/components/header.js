import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Background from '../images/headerBG.png';
import Img from "gatsby-image"

import MainNav from "./mainNav"

const Header = ({ siteTitle, siteAuthor, siteLogo }) => (
  
  <header
    style={{
      background: `#ccc`,
      // marginBottom: `1.45rem`,
      // backgroundImage: `url(${Background})`,
    }}
  >
    <div
      style={{
        // margin: `0 auto`,
        margin: `0`,
        // maxWidth: 960,
        // padding: `1.45rem 1.0875rem 0`,
        paddingBottom: 0,
        display: `flex`,
        justifyContent: `flex-start`,
      }}
    >

      <Link
        className="headerLogo"
        to="/"
      >
        <Img
          fixed={siteLogo}
          alt={siteTitle}
        />
      </Link>

      <div>

      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}>
          <h2 style={{ margin: `1rem 0 0`,
            color: `#10316b`,
            textTransform: `uppercase`,
            fontWeight: `700`,
          }}>
            {siteTitle}
          </h2>
      </Link>

        <p style={{ margin: `1rem 0 0`,
          color: `#10316b`,
          textDecoration: `none`,
          fontFamily: `'Cabin', sans-seri`,
        }}>
          {siteAuthor}
        </p>
      </div>
      <MainNav/>
    </div>
    <MainNav/>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteAuthor: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  siteAuthor: ``,
}

export default Header
