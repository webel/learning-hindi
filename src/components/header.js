import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
/** @jsx jsx */
import { jsx } from "theme-ui"

const NavItemStyle = { color: "gray", textDecoration: "none", mx: [10, 20, 40] }

const Header = ({ siteTitle }) => (
  <header
    sx={{
      // background: `#B74F6F`,
      marginBottom: [0, 1, 3],
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: "flex",
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <h5>
        <Link sx={NavItemStyle} to="/">
          Vowels
        </Link>
      </h5>
      <h5>
        <Link sx={NavItemStyle} to="/commonWords">
          Common Words
        </Link>
      </h5>
      <h5>
        <Link sx={NavItemStyle} to="/learn">
          Learn
        </Link>
      </h5>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
