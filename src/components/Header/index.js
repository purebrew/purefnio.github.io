import React from 'react'
import Link from 'gatsby-link'
import logo from '../../images/logo.png'

const Header = () => (
  <div className="header">
    <div>
      <h1>
        <Link to="/">
          <img src={logo} alt="purefn logo" height="60" />
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
