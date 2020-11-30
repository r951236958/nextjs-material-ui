import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
//import { Switch, Route, useParams, useRouteMatch } from 'react-router-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as RouterLink,
} from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Link, Icon, List } from '@material-ui/core'
import ListItemLink from '../components/ListItemLink'
//import routes from '../routes'
import Mobile from './Mobile'
import Desktop from './Desktop'
import Laptop from './Laptop'
//import Breadcrumbs from '../components/SimpleBreadcrumbs'
//const devicesUrl = matchRoutes(routes, '/devices/:id')
//const mobileUrl = matchRoutes(routes, '/devices/mobile')
//const desktopUrl = matchRoutes(routes, '/devices/desktop')
//const laptopUrl = matchRoutes(routes, '/devices/laptop')

const routes = [
  {
    path: '/devices/mobile',
    id: '/devices/mobile',
    key: 'DEVICES_MOBILE',
    sidebar: 'Mobile Phone',
    breadcrumbName: 'Mobile Phone',
    icon: <Icon>phone_iphone</Icon>,
    component: Mobile,
  },
  {
    path: '/devices/desktop',
    id: '/devices/desktop',
    key: 'DEVICES_DESKTOP',
    sidebar: 'Desktop PC',
    breadcrumbName: 'Desktop PC',
    icon: <Icon>desktop_mac</Icon>,
    component: Desktop,
  },
  {
    path: '/devices/laptop',
    id: '/devices/laptop',
    key: 'DEVICES_LAPTOP',
    sidebar: 'Laptop',
    breadcrumbName: 'Laptop',
    icon: <Icon>laptop_mac</Icon>,
    component: Laptop,
  },
]

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={(props) => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  )
}

function DevicesList({ routes }) {
  const routeComponents = routes.map(({ path, sidebar, icon }, key) => (
    <ListItemLink to={path} primary={sidebar} icon={icon} key={key} />
  ))
  return (
    <div>
      <List>{routeComponents}</List>
    </div>
  )
}

function Devices() {
  return (
    <Router>
      <div>
        <Typography variant="h3">Devices</Typography>
        <DevicesList />
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </div>
    </Router>
  )
}

export default Devices
