import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Background from '../images/headerBG.png';
import Img from "gatsby-image"
import * as style from "./header.module.css"

import MainNav from "./mainNav"

const Header = ({ siteTitle, siteAuthor, siteLogo }) => (
  
  <header
    style={{
      background: `#ccc`,
      // backgroundImage: `url(${Background})`,
    }}
  >
    <div className={style.headerWrapper}>

      <Link className={style.headerLogo} to="/">
        <Img fixed={siteLogo} alt={siteTitle}/>
      </Link>

      <div className={style.siteTitleWrapper}>
        <Link to="/" className={style.siteTitleLink}>
            <h2>{siteTitle}</h2>
        </Link>
        <p className={style.siteAuthor}>
          {siteAuthor}
        </p>
      </div>

      <MainNav/>

    </div>
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
