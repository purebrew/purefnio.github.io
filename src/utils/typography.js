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
    backgroundImage: background,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }
})

theme.bodyColor = 'white'
theme.headerColor = 'white'

const typography = new Typography(theme)

export default typography
