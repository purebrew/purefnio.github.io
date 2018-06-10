import React from 'react'
import Link from 'gatsby-link'

const Footer = () => (
  <footer
    style={{
      flexShrink: 0,
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
        Contact
        <a
          href="mailto:info@purefn.io"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          info@purefn.io
        </a>
        
    </div>
  </footer>
)

export default Footer
