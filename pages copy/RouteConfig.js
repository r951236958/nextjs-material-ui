import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as RouterLink,
} from 'react-router-dom'
import { Icon, Link, List, Typography } from '@material-ui/core'
import Sandwiches from './Sandwiches'
//import Tacos from './Tacos'
import Bus from './Bus'
import Cart from './Cart'
//import Devices from './Devices'
//import Mobile from './Mobile'
//import Desktop from './Desktop'
//import Laptop from './Laptop'
import Food from './Food'
import Ele from './Ele'
import PropTypes from 'prop-types'
import ListItemLink from '../components/ListItemLink'
import styled from 'styled-components'

// Some folks find value in a centralized route config.
// A route config is just data. React is great at mapping
// data into components, and <Route> is a component.

// Our route config is just an array of logical "routes"
// with `path` and `component` props, ordered the same
// way you'd do inside a `<Switch>`.
const routes = [
  {
    path: '/sandwiches',
    key: 'ROUTECONFIG',
    sidebar: 'Sandwiches',
    icon: <Icon>fastfood</Icon>,
    component: Sandwiches,
  },
  {
    path: '/tacos',
    key: 'TACOS',
    sidebar: 'Tacos',
    icon: <Icon>local_florist</Icon>,
    component: Tacos,
    routes: [
      {
        path: '/tacos/bus',
        sidebar: 'Bus',
        icon: <Icon>directions_bus</Icon>,
        component: Bus,
      },
      {
        path: '/tacos/cart',
        sidebar: 'Cart',
        icon: <Icon>shopping_cart</Icon>,
        component: Cart,
      },
    ],
  },
  {
    path: '/cool',
    key: 'COOL',
    sidebar: 'Cool',
    icon: <Icon>crown</Icon>,
    component: Cool,
    routes: [
      {
        path: '/cool/food',
        sidebar: 'Food',
        icon: <Icon>ice_cream</Icon>,
        component: Food,
      },
      {
        path: '/cool/ele',
        sidebar: 'Electronic',
        icon: <Icon>user_secret</Icon>,
        component: Ele,
      },
    ],
  },
  //{
  //  path: '/sandwiches',
  //  component: Sandwiches,
  //},
  //{
  //  path: '/tacos',
  //  component: Tacos,
  //  routes: [
  //    {
  //      path: '/tacos/bus',
  //      component: Bus,
  //    },
  //    {
  //      path: '/tacos/cart',
  //      component: Cart,
  //    },
  //  ],
  //},
]

ListItemLink.propTypes = {
  icon: PropTypes.element,
  primary: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  open: PropTypes.bool,
}

const ButtonStyle = styled(Link)`
  margin-left: 16px;
  display: fles;
`

export default function RouteConfigExample() {
  return (
    <Router>
      <div>
        <div>
          <ButtonStyle color="textPrimary" to="/cool" component={RouterLink}>
            <Icon className="fab fa-apple fa-fw" />
            Cool
          </ButtonStyle>

          <ButtonStyle color="textPrimary" to="/tacos" component={RouterLink}>
            <Icon className="fab fa-android fa-fw" />
            Tacos
          </ButtonStyle>

          <ButtonStyle color="inherit" to="/sandwiches" component={RouterLink}>
            <Icon className="fas fa-hamburger fa-fw" />
            Sandwiches
          </ButtonStyle>
        </div>

        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </div>
    </Router>
  )
}

// A special wrapper for <Route> that knows how to
// handle "sub"-routes by passing them in a `routes`
// prop to the component it renders.
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

function Tacos({ routes }) {
  const routeComponents = routes.map(({ path, sidebar, icon }, key) => (
    <ListItemLink to={path} primary={sidebar} icon={icon} key={key} />
  ))
  return (
    <div>
      <h2>Tacos</h2>
      <List>{routeComponents}</List>

      <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
    </div>
  )
}

function Cool({ routes }) {
  const routeComponents = routes.map(({ path, sidebar, icon }, key) => (
    <ListItemLink to={path} primary={sidebar} icon={icon} key={key} />
  ))
  return (
    <div>
      <h2>Cool</h2>
      <List>{routeComponents}</List>

      <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
    </div>
  )
}
