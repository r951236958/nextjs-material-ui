import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'

import Paper from '@material-ui/core/Paper'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListSubheader from '@material-ui/core/ListSubheader'
import Divider from '@material-ui/core/Divider'
//import AccountCircle from '@material-ui/icons/AccountCircle'
import HelpIcon from '@material-ui/icons/Help'
import HomeIcon from '@material-ui/icons/Home'
//import InboxIcon from '@material-ui/icons/Inbox';
//import DraftsIcon from '@material-ui/icons/Drafts';
import Typography from '@material-ui/core/Typography'
import { Route, MemoryRouter } from 'react-router'
import { Link as RouterLink } from 'react-router-dom'

function ListItemLink(props) {
  const { icon, primary, to } = props

  const renderLink = React.useMemo(
    () =>
      React.forwardRef((itemProps, ref) => (
        <RouterLink to={to} ref={ref} {...itemProps} />
      )),
    [to]
  )

  return (
    <li>
      <ListItem button component={renderLink}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  )
}

ListItemLink.propTypes = {
  icon: PropTypes.element,
  primary: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired
}

const useStyles = makeStyles({
  root: {
    width: 360
  }
})

export default function ListRouter() {
  const classes = useStyles()

  return (
    <MemoryRouter initialEntries={['/']} initialIndex={0}>
      <div className={classes.root}>
        <Route>
          {({ location }) => (
            <ListSubheader>{`Current route: ${location.pathname}`}</ListSubheader>
          )}
        </Route>
        <Paper elevation={0}>
          <List aria-label="main page folders">
            <ListItemLink to="/" primary="Index" icon={<HomeIcon />} />
            <ListItemLink to="/about" primary="About" icon={<HelpIcon />} />
          </List>
          <Divider />
          <List aria-label="secondary User folders">
            <ListItemLink to="/home" primary="Home" />
            <ListItemLink to="/login" primary="Login" />
          </List>
        </Paper>
      </div>
    </MemoryRouter>
  )
}
