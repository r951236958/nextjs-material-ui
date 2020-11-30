import Container from '@material-ui/core/Container'
//import Button from '@material-ui/core/Button'
//import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import React from 'react'
//import { renderRoutes } from 'react-router-config'
//import { Link } from 'react-router-dom'
import LinkList from '../components/LinkList'
//import Breadcrumbs from '../components/SimpleBreadcrumbs'

function Home({ route }) {
  return (
    <div className="Home">
      <Typography variant="h3">Home</Typography>
      <Container maxWidth="xs">
        <Paper elevation={10} />
        <LinkList />
      </Container>
    </div>
  )
}

export default Home
