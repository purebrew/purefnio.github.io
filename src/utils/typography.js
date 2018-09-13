import Typography from "typography";

import theme from "typography-theme-lawton";

theme.overrideThemeStyles = ({ rhythm }, options) => ({
  html: {
    height: '100%',
  },
  body: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  '#___gatsby': {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  'a': {
    color: '#494947',
    fontFamily: 'sans-serif'
  },
  'a:hover': {
    color: '#17bdba',
  },
  '.header img, .header h1': {
    marginBottom: '0'
  },
  '.header, .footer': {
    backgroundColor: 'white',
    flexShrink: 0,
    width: '100%'
  },
  '.header': {
    textAlign: 'center'
  },
  '.header > div,.footer > div': {
    margin: '0 auto',
    maxWidth: '800px',
    padding: '1.45rem 1.0875rem',
  },
  '.footer': {
    position: 'relative',
    clear: 'both',
    textAlign: 'center',
    color: '#494947',
    minHeight: '3rem',
    fontFamily: 'Work Sans, sans-serif',
    fontSize: '0.75rem'
  },
})

theme.bodyColor = 'gray'
theme.headerColor = 'gray'

const typography = new Typography(theme)

export default typography
