import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Fab from '@material-ui/core/Fab'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import ScrollTop from '../src/components/ScrollTop'
//import theme from '../src/theme'
import '../styles/globals.css'
import '../styles/Home.module.css'

export default function MyApp(props) {
  const { Component, pageProps } = props

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
          primary: {
            light: '#768b94',
            main: '#546e7a',
            dark: '#3a4d55'
          },
          secondary: {
            light: '#ffef62',
            main: '#ffeb3b',
            dark: '#b2a429'
          },
          error: {
            light: '#e57373',
            main: '#f44336',
            dark: '#d32f2f'
          },
          warning: {
            light: '#ffb74d',
            main: '#ff9800',
            dark: '#f57c00'
          },
          info: {
            light: '#64b5f6',
            main: '#2196f3',
            dark: '#1976d2'
          },
          success: {
            light: '#81c784',
            main: '#4caf50',
            dark: '#388e3c'
          }
        },
        typography: {
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
      }),
    [prefersDarkMode]
  )

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        ></link>
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
        <ScrollTop {...pageProps}>
          <Fab color="secondary" size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </ThemeProvider>
    </React.Fragment>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired
}
