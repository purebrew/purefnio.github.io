/* eslint  react/prop-types: 0 */
import React from "react";

import Footer from './components/Footer'

import appleTouchIcon from './images/favicon/apple-touch-icon.png'
import safariPinedTabIcon from './images/favicon/safari-pinned-tab.svg'
import favicon from './images/favicon/favicon.ico'
import favicon32 from './images/favicon/favicon-32x32.png'
import favicon16 from './images/favicon/favicon-16x16.png'

module.exports = class HTML extends React.Component {
  render() {
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {this.props.headComponents}
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="#D0E0D8" />
          <meta name="apple-mobile-web-app-title" content="purefn.io engineering" />
          <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon}/>
          <link rel="shortcut icon" href={favicon} />
          <link rel="icon" type="image/png" sizes="32x32" href={favicon32}/>
          <link rel="icon" type="image/png" sizes="16x16" href={favicon16}/> 
          <link rel="mask-icon" href={safariPinedTabIcon} color="#5bbad5"/>
          <meta name="msapplication-TileColor" content="#da532c"/>
          <meta name="theme-color" content="#ffffff"/>
          <link href="https://fonts.googleapis.com/css?family=Work+Sans:300,400,700" rel="stylesheet" />
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div key={`body`} id="___gatsby" dangerouslySetInnerHTML={{ __html: this.props.body }} />
          {this.props.postBodyComponents}
          <Footer />
        </body>
      </html>
    );
  }
};
