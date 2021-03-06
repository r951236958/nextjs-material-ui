import AppBar from '@material-ui/core/AppBar'
import Badge from '@material-ui/core/Badge'
import Collapse from '@material-ui/core/Collapse'
import CssBaseline from '@material-ui/core/CssBaseline'
import Divider from '@material-ui/core/Divider'
import Icon from '@material-ui/core/Icon'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
//import AccountCircle from '@material-ui/icons/AccountCircle'
//import HelpIcon from '@material-ui/icons/Help'
//import HomeIcon from '@material-ui/icons/Home'
//import MailIcon from '@material-ui/icons/Mail'
//import MenuIcon from '@material-ui/icons/Menu'
//import MoreIcon from '@material-ui/icons/MoreVert'
//import InboxIcon from '@material-ui/icons/MoveToInbox'
//import NotificationsIcon from '@material-ui/icons/Notifications'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { MemoryRouter as Router, Route } from 'react-router'
import routes from '../routes'
import ListItemLink from './ListItemLink'
import theme from '../theme'
import Link from '../Link'

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  grow: {
    flexGrow: 1,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}))

const DevicesItem = [
  {
    path: '/devices/mobile',
    icon: <Icon>phone_iphone</Icon>,
    primary: 'Mobile',
  },
  {
    path: '/devices/desktop',
    icon: <Icon>desktop_mac</Icon>,
    primary: 'Desktop',
  },
  {
    path: '/devices/laptop',
    icon: <Icon>laptop_mac</Icon>,
    primary: 'Laptop',
  },
]

const NavMenuItem = [
  {
    path: '/',
    icon: <Icon>home</Icon>,
    primary: 'Home',
  },
  {
    path: '/about',
    icon: <Icon>help</Icon>,
    primary: 'About',
  },
  {
    path: '/devices',
    icon: <Icon>devices_other</Icon>,
    primary: 'Devices',
  },
  {
    path: '/color',
    icon: <Icon>palette</Icon>,
    primary: 'Color',
  },
  {
    path: '/topics',
    icon: <Icon>topics</Icon>,
    primary: 'Topics',
  },
]

const DevicesItemList = DevicesItem.map(({ path, primary, icon }, key) => (
  <ListItemLink
    href={path}
    primary={primary}
    icon={icon}
    key={key.toString()}
  />
))

function MyDrawer(props) {
  const { window } = props
  const classes = useStyles()
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const routeDrawerComponents = routes.map(({ path, sidebar, icon }, key) => (
    <ListItemLink href={path} primary={sidebar} icon={icon} key={key} />
  ))

  const [open, setOpen] = React.useState(true)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const navMenuComponents = NavMenuItem.map(
    ({ path, primary, ...other }, key) => (
      <ListItemLink href={path} primary={primary} {...other} key={key} />
    )
  )

  const { icon, href, primary, ...other } = props

  const drawer = (
    <Router initialEntries={['/inbox']} initialIndex={0}>
      <div className={classes.toolbar} />
      <Divider />
      <Route>
        <List>
          <ListItemLink
            href="/devices"
            primary="Devices"
            icon={<Icon>devices_other</Icon>}
            open={open}
          />
          <Collapse
            component="li"
            in={open}
            timeout="auto"
            unmountOnExit
            className={classes.nested}
          >
            <List disablePadding>{DevicesItemList}</List>
          </Collapse>
        </List>
        <Divider />
        <List>
          {NavMenuItem.map(({ path, primary, icon, ...other }) => (
            <ListItem
              button
              key={path}
              component={RouterLink}
              href={path}
              {...other}
            >
              {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
              <ListItemText primary={primary} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? (
                  <Icon>move_to_inbox</Icon>
                ) : (
                  <Icon>mail_outline</Icon>
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? (
                  <Icon>move_to_inbox</Icon>
                ) : (
                  <Icon>mail_outline</Icon>
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Route>
    </Router>
  )

  const container =
    window !== undefined ? () => window().document.body : undefined

  const [anchorEl, setAnchorEl] = React.useState(null)
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null)

  const isMenuOpen = Boolean(anchorEl)
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
    handleMobileMenuClose()
  }

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget)
  }

  const menuId = 'primary-search-account-menu'
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  )

  const mobileMenuId = 'primary-search-account-menu-mobile'
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {navMenuComponents}
    </Menu>
  )

  return (
    <Router>
      <Route>
        <div className={classes.root}>
          <CssBaseline />
          <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                className={classes.menuButton}
              >
                <Icon>munu</Icon>
              </IconButton>
              <Typography className={classes.title} variant="h6" noWrap>
                Responsive drawer
              </Typography>
              <div className={classes.grow} />
              <div className={classes.sectionDesktop}>
                <Link href="about" compoent="button">
                  About
                </Link>
                <IconButton
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <Badge badgeContent={17} color="secondary">
                    <Icon>notifications</Icon>
                  </Badge>
                </IconButton>
                <IconButton
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  <Icon>account_circle</Icon>
                </IconButton>
              </div>
              <div className={classes.sectionMobile}>
                <IconButton
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  onClick={handleMobileMenuOpen}
                  color="inherit"
                >
                  <Icon>more_vert</Icon>
                </IconButton>
              </div>
            </Toolbar>
          </AppBar>
          {renderMobileMenu}
          {renderMenu}
          <nav className={classes.drawer} aria-label="mailbox folders">
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Hidden smUp implementation="css">
              <Drawer
                container={container}
                variant="temporary"
                anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                open={mobileOpen}
                onClose={handleDrawerToggle}
                classes={{
                  paper: classes.drawerPaper,
                }}
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
                }}
              >
                {drawer}
              </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
              <Drawer
                classes={{
                  paper: classes.drawerPaper,
                }}
                variant="permanent"
                open
              >
                {drawer}
              </Drawer>
            </Hidden>
          </nav>
        </div>
      </Route>
    </Router>
  )
}

export default MyDrawer
