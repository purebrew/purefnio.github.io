import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <p>
      We are a group of passionate software developers providing software
      consulting specialising in full-stack development, distributed systems and
      serverless applications. Members with over 10 years of experience in the
      IT segment provide expertise and services such as architectural reviews
      and Proof of Concepts.
    </p>
    <p>
      While relying on the remote work and agile methodologies, we are
      delivering software projects in the United Kingdom and Czech Republic.
    </p>

    <h3>You can expect us to do</h3>
    <ul style={{ listStyle: 'none' }}>
      <li>
        <p>Architectural Reviews</p>
      </li>
      <li>
        <p>Proof of Concept - Prototypes</p>
      </li>
      <li>
        <p>Software Development and Delivery</p>
      </li>
    </ul>
    <h3>We have expertise in the following areas</h3>
    <ul style={{ listStyle: 'none' }}>
      <li>
        <p>Distributed Systems</p>
      </li>
      <li>
        <p>Full-Stack Software Engineering</p>
      </li>
      <li>
        <p>Cloud Environments and Automation</p>
      </li>
    </ul>
    <p style={{ marginTop: '20px' }}>
      Contact us if you need help to build great solutions -{' '}
      <a
        style={{
          color: '#17bdba',
        }}
        href="mailto:info@purefn.io"
      >
        info@purefn.io
      </a>
    </p>
  </div>
)

export default IndexPage
