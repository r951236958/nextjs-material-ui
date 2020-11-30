import AppBar from '@material-ui/core/AppBar';
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { fade, makeStyles, useTheme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
//import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
//import ChevronRightIcon from '@material-ui/icons/ChevronRight';
//import MailIcon from '@material-ui/icons/Mail';
//import MenuIcon from '@material-ui/icons/Menu';
//import InboxIcon from '@material-ui/icons/MoveToInbox';
import clsx from 'clsx';
import React from 'react';
import { renderRoutes } from 'react-router-config';
import MDCIcon30 from '../icons/MDCIcon30';
import MuiIcon30 from '../icons/MuiIcon30';
//import { NavLink } from 'react-router-dom';
import Link from '../Link';
import routes from '../routes';
import MenuListLink from './MenuListLink';
import NavItemLink from './NavItemLink';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    backgroundColor: theme.palette.background.paper,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  toolbar: theme.mixins.toolbar,
  focused: {
    '&:focus': {
      color: theme.palette.secondary.main,
      backgroundColor: theme.palette.action.selected,
    },
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
  logoButton: {
    color: '#61DAFB',
  },

  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
  logo: {
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    width: 40,
    height: 40,
  },
}));

const DevicesItem = [
  {
    path: '/devices/mobile',
icon: <Icon>phone_iphone</Icon>,
primary: 'Mobile',},

{path: '/devices/desktop',
icon: <Icon>desktop_mac</Icon>,
primary: 'Desktop',},

{path: '/devices/laptop',
icon: <Icon>laptop_mac</Icon>,
primary: 'Laptop',},
]

const DevicesItemList = DevicesItem.map(({ path, primary, icon }, key)  => 
<MenuListLink to={path} primary={primary} icon={icon} key={key.toString()} />
)

export default function DrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const routeDrawerComponents = routes.map(({ path, sidebar, icon }, key) => (
    <MenuListLink
      to={path}
      primary={sidebar}
      icon={icon}
      key={key}
    />
  ));

  const drawer = (
    <div>
      <Divider />
      <List>{routeDrawerComponents}</List>
      <Divider />
      <List>
        <MenuListLink
          to="/devices"
          primary="Devices"
          icon={<Icon>devices_other</Icon>}
          open={open}
          
        />
        <Collapse component="li" in={open} timeout="auto" unmountOnExit className={classes.nested}>
          <List disablePadding>
            {DevicesItemList}
          </List>
        </Collapse>
      </List>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <MuiIcon30 />
          </ListItemIcon>
          <Link
            color="inherit"
            href="https://material-ui.com/zh/"
            target="_blank"
            rel="noopener"
          >
            <ListItemText primary="Material-UI" />
          </Link>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <MDCIcon30 />
          </ListItemIcon>
          <Link
            color="inherit"
            href="https://material.io/resources/icons/?icon=expand_less&style=baseline"
            target="_blank"
            rel="noopener"
          >
            <ListItemText primary="Material Design Icon" />
          </Link>
        </ListItem>
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
    </div>
  );

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
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
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
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
      <MenuItem onClick={handleMenuClose}>handleMenuClose</MenuItem>
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <Icon>mail_outline</Icon>
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <Icon>notifications</Icon>
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <Icon>account_circle</Icon>
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <Icon>menu</Icon>
          </IconButton>
          <Button
            onClick={handleDrawerOpen}
            color="inherit"
            to="/"
            component={Link}
            className={classes.logoButton}
            startIcon={<img alt="logo" src="/logo.svg" className={classes.logo} />} >
            React
          </Button>
          <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <NavItemLink to="/" primary="Home" color="inherit" />

              <NavItemLink
                to="/about"
                primary="About"
                variant="button"
                color="inherit"
              />

              <NavItemLink
                to="/color"
                primary="Color"
                variant="button"
                color="inherit"
              />

              <NavItemLink
                to="/topics"
                primary="Topics"
                variant="button"
                color="inherit"
              />

              <NavItemLink
                to="/devices"
                primary="Devices"
                variant="button"
                color="inherit"
              />
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
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <Icon>chevron_left</Icon> : <Icon>chevron_right</Icon>}
          </IconButton>
        </div>
        <Divider />
        {drawer}
      </Drawer>
      <Container maxWidth="md" component="main" className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}>
        <Toolbar />
        {renderRoutes(routes)}
        </Container>
      
    </div>
  );
}
