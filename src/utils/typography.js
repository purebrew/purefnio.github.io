import Typography from "typography";

import theme from "typography-theme-lawton";
import background from '../images/background.jpg'

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
    flex: '1 0 auto',
    backgroundImage: `url(${background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
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
  '.header > div,.footer > div': {
    margin: '0 auto',
    maxWidth: '800px',
    padding: '1.45rem 1.0875rem',
  },
  '.footer': {
    position: 'relative',
    clear: 'both'
  },
  '.footer h3': {
    margin: 0,
    color: '#494947'
  },
  '.content': {
    margin: '0 auto',
    maxWidth: '750px',
    padding: '1rem 1.0875rem 1.45rem',
    marginTop: '1rem',
    color: 'white',
    backgroundColor: 'rgb(0,0,0, 0.8)',
    fontFamily: 'sans-serif',
  }
})

theme.bodyColor = 'white'
theme.headerColor = 'white'

const typography = new Typography(theme)

export default typography
