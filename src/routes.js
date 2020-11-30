//import HomeChild from '../pages/HomeChild'
import Icon from '@material-ui/core/Icon'
import React from 'react'
//import Root from './App'
//import About from '../pages/About';
import About from '../pages/about'
//import Books from '../pages/books'
//import Color from '../pages/color'
//import Dashboard from '../pages/Dashboard';
//import Desktop from '../pages/desktop'
//import Devices from '../pages/devices'
import Home from '../pages/home'
//import Laptop from '../pages/laptop'
//import Mobile from '../pages/mobile'
//import TestPage from '../pages/testpage'
//import NotFound from '../pages/NotFound'
//import Page1 from '../pages/Page-1';
//import Page2 from '../pages/Page-2';
//import Page3 from '../pages/Page-3';
//import AboutRoute from '../pages/AboutRoute';
//import Topics from '../pages/topics'
//import { NavLink } from 'react-router-dom'

const routes = [
  {
    path: '/',
    key: 'ROOT',
    exact: true,
    sidebar: 'Home',
    breadcrumbName: 'Home',
    icon: <Icon>home</Icon>,
    component: Home,
  },
  {
    path: '/about',
    key: 'ABOUT',
    sidebar: 'About',
    breadcrumbName: 'About',
    icon: <Icon>help</Icon>,
    component: About,
  },
  //{
  //  path: '/topics',
  //  key: 'TOPICS',
  //  sidebar: 'Topics',
  //  breadcrumbName: 'Topics',
  //  icon: <Icon>topics</Icon>,
  //  component: Topics,
  //},
  //{
  //  path: '/test',
  //  key: 'TESTPAGE',
  //  sidebar: 'Test Page',
  //  breadcrumbName: 'TestPage',
  //  icon: <Icon>hot_tub</Icon>,
  //  component: TestPage,
  //},
  //{
  //  path: '/route',
  //  key: 'ROUTE',
  //  sidebar: 'AboutRoute',
  //  breadcrumbName: 'Route',
  //  icon: <Icon>alt_route</Icon>,
  //  component: AboutRoute,
  //},
  //{
  //  path: '/color',
  //  key: 'COLOR',
  //  sidebar: 'Color',
  //  breadcrumbName: 'Color',
  //  icon: <Icon>palette</Icon>,
  //  component: Color,
  //},
  //{
  //  path: '/page1',
  //  key: 'PAGE_1',
  //  sidebar: 'Page1',
  //  breadcrumbName: 'Page1',
  //  icon: <Icon>text_snippet</Icon>,
  //  component: Page1,
  //},
  //{
  //  path: '/page2',
  //  key: 'PAGE_2',
  //  sidebar: 'Page2',
  //  breadcrumbName: 'Page2',
  //  icon: <Icon>text_snippet</Icon>,
  //  component: Page2,
  //},
  //{
  //  path: '/page3',
  //  key: 'PAGE_3',
  //  sidebar: 'Page3',
  //  breadcrumbName: 'Page3',
  //  icon: <Icon>text_snippet</Icon>,
  //  component: Page3,
  //},
  //{
  //  path: '/dashboard',
  //  key: 'DASHBOARD',
  //  sidebar: 'Dashboard',
  //  breadcrumbName: 'Dashboard',
  //  icon: <Icon>insert_chart</Icon>,
  //  component: Dashboard,
  //},
  //{
  //  path: '/devices',
  //  key: 'DEVICES',
  //  component: Devices,
  //  sidebar: 'Devices',
  //  breadcrumbName: 'Devices',
  //  icon: <Icon>devices_other</Icon>,
  //  routes: [
  //    {
  //      path: '/devices/mobile',
  //      key: 'DEVICES_MOBILE',
  //      sidebar: 'Mobile Phone',
  //      breadcrumbName: 'Mobile Phone',
  //      icon: <Icon>phone_iphone</Icon>,
  //      component: Mobile,
  //    },
  //    {
  //      path: '/devices/desktop',
  //      key: 'DEVICES_DESKTOP',
  //      sidebar: 'Desktop PC',
  //      breadcrumbName: 'Desktop PC',
  //      icon: <Icon>desktop_mac</Icon>,
  //      component: Desktop,
  //    },
  //    {
  //      path: '/devices/laptop',
  //      key: 'DEVICES_LAPTOP',
  //      sidebar: 'Laptop',
  //      breadcrumbName: 'Laptop',
  //      icon: <Icon>laptop_mac</Icon>,
  //      component: Laptop,
  //    },
  //  ],
  //},
  //{
  //  path: '/books',
  //  key: 'BOOKS',
  //  sidebar: 'Books',
  //  icon: <Icon>menu_book</Icon>,
  //  component: Books,
  //},
]

export default routes
