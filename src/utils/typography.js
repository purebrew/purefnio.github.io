import Typography from "typography";

import theme from "typography-theme-lawton";

theme.overrideThemeStyles = ({ rhythm }, options) => ({
  html: {
    height: '100%',
    text-color: 'white',
  },
  body: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  '#___gatsby': {
    flex: '1 0 auto'
  }
})

const typography = new Typography(theme)

export default typography
