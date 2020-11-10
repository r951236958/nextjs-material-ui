import { red } from '@material-ui/core/colors'
import { createMuiTheme } from '@material-ui/core/styles'

// Create a theme instance.
const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#ffeb3b'
      },
      secondary: {
        main: '#ec407a'
      },
      error: {
        main: red.A400
      },
      bk: {
        main: '#272c34'
      },
      //type: 'dark'
    },
    root: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"'
      ].join(',')
    }
  })

export default theme
