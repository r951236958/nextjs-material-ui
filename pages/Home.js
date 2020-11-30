import {
  Button,
  Container,
  List,
  ListItem,
  ListItemText,
  Link as MuiLink,
  Icon,
  Paper,
  Typography,
} from '@material-ui/core/'
import ListItemLink from '../src/components/ListItemLink'
import MyDrawer from '../src/components/MyDrawer'
import Link from '../src/Link'
import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'

//import { renderRoutes } from 'react-router-config'
//import { Link } from 'react-router-dom'
//import Breadcrumbs from '../components/SimpleBreadcrumbs'

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

const DevicesItemList = DevicesItem.map(({ path, primary, icon }, key) => (
  <ListItemLink
    href={path}
    primary={primary}
    icon={icon}
    ref={key.toString()}
  />
))

function Home() {
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

  return (
    <div>
      <MyDrawer />
      <div className="Home">
        <Typography variant="h3">Home</Typography>
        <Container maxWidth="xs">
          <Paper elevation={10} />
          <ListItemLink href="/" icon={<Icon>home</Icon>} primary="Home" />

          <ListItemLink
            href="/about"
            icon={<Icon>help</Icon>}
            primary="About"
          />
        </Container>
        <ul>
          {NavMenuItem.map(({ path, primary }, key) => (
            <li key={key.toString()}>
              <Link href={path}>
                <a>{primary}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Home
