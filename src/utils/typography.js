import Typography from "typography";

import theme from "typography-theme-lawton";
import background from '../images/jakub-sejkora-42085-unsplash.jpg'

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
    clear: 'both',
    textAlign: 'center',
    color: '#494947',
    minHeight: '3rem',
    fontFamily: 'sans-serif',
    fontSize: '0.75rem'
  },
  '.content': {
    margin: '0 auto',
    maxWidth: '750px',
    padding: '1rem 1.0875rem 1.45rem',
    marginTop: '2.5rem',
    color: 'white',
    backgroundColor: 'rgb(0,0,0, 0.8)',
    fontFamily: 'sans-serif',
    textAlign: 'justify',
  }
})

theme.bodyColor = 'white'
theme.headerColor = 'white'

const typography = new Typography(theme)

export default typography
