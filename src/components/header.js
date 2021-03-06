import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import nansenLogo from '../images/nansen-icon.png'

const iconStyles={
 height: '72px',
 width: '59px'
}

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: `#15567F`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <img src={nansenLogo} alt="Nansen Icon" style={iconStyles} />
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
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
