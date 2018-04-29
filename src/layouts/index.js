import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Footer from '../components/Footer'

import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Pure Fn - Pure Brew Limited - Software Architecture, Distributed Systems, POCs and Softwared Delivery "
      meta={[
        { name: 'description', content: 'Pure Brew Limited is a software consulting company providing architecture reviews, building proof of concepts and develops and delivers software' },
        { name: 'keywords', content: 'software consultancy, distributed systems, software architecture reviews, software development, software delivery' },
      ]}
    />
    <Header pages={children()} />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 750,
        padding: '1rem 1.0875rem 1.45rem',
        marginTop: '1rem',
        opacity: 0.6,
        color: 'white',
        backgroundColor: 'black',
      }}
    >
      {children()}
    </div>
  </div>)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
