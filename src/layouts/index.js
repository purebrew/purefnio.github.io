import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Footer from '../components/Footer'

import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="purefn - Passionate Software Developers"
      meta={[
        { name: 'keywords', content: 'software consultancy, distributed systems, software architecture reviews, software development, software delivery' },
      ]}
    />
    <Header pages={children()} />
    <div className='page-body'>
      {children()}
    </div>
  </div>)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
