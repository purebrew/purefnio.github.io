import React from 'react'
import Link from 'gatsby-link'
import logo from '../../images/logo.png'

const Header = () => (
  <div
    style={{
      background: '#17BDBA',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 800,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          <img src={logo} alt="pure fn" height="60" />
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
