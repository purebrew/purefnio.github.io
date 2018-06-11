import React from 'react'
import Link from 'gatsby-link'

import './styles.css'

const Footer = () => (
  <footer className="page-footer">
    <div>
        <h3 style={{ margin: 0 }}>
          Contact
        </h3>
        <a
          href="mailto:info@purefn.io"
          style={{
            textDecoration: 'none',
          }}
        >
          info@purefn.io
        </a>

    </div>
  </footer>
)

export default Footer
