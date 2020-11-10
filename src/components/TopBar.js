
//import React, { useEffect, useState } from 'react'
//import netlifyAuth from '../netlifyAuth.js'
// npm install --save-dev @iconify/react @iconify-icons/simple-icons
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MuiLink from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import Link from '../Link'

function VercelIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M24 22.525H0l12-21.05 12 21.05z" fill="#fff"/>
      </SvgIcon>
    );
  }

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
      <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>

        <Typography
          variant="h6"
          color="inherit"
          noWrap
          className={classes.toolbarTitle}
        >
        <VercelIcon />
        <Link href="https://vercel.com/" color="textPrimary">
        Vercel
        </Link>
          
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