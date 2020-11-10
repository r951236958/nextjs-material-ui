import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import MuiLink from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
//import React, { useEffect, useState } from 'react'
//import netlifyAuth from '../netlifyAuth.js'

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbar: {
    flexWrap: 'wrap'
  },
  toolbarTitle: {
    flexGrow: 1
  },
  link: {
    margin: theme.spacing(1, 1.5)
  }
}))

export default function TopBar() {
  const classes = useStyles()
  //let [loggedIn, setLoggedIn] = useState(netlifyAuth.isAuthenticated)
//
  //useEffect(() => {
  //  let isCurrent = true
  //  netlifyAuth.initialize((user) => {
  //    if (isCurrent) {
  //      setLoggedIn(!!user)
  //    }
  //  })
//
  //  return () => {
  //    isCurrent = false
  //  }
  //}, [])
//
  //let login = () => {
  //  netlifyAuth.authenticate((user) => {
  //    setLoggedIn(!!user)
  //  })
  //}

  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      className={classes.appBar}
    >
      <Toolbar className={classes.toolbar}>
        <Typography
          variant="h6"
          color="inherit"
          noWrap
          className={classes.toolbarTitle}
        >
          Company name
        </Typography>
        <nav>
          <MuiLink
            variant="button"
            color="textPrimary"
            href="#"
            className={classes.link}
          >
            Features
          </MuiLink>
          <MuiLink
            variant="button"
            color="textPrimary"
            href="#"
            className={classes.link}
          >
            Enterprise
          </MuiLink>
          <MuiLink
            variant="button"
            color="textPrimary"
            href="#"
            className={classes.link}
          >
            Support
          </MuiLink>
        </nav>

        <Button
            variant="outlined"
            color="primary"
            className={classes.link}
          >
            Log In.
          </Button>
      </Toolbar>
    </AppBar>
  )
}