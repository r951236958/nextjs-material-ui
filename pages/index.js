import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Toolbar from '@material-ui/core/Toolbar'
import ProTip from '../src/ProTip'
import Link from '../src/Link'
import Copyright from '../src/Copyright'
import Footer from '../src/components/Footer'
import MyDrawer from '../src/components/MyDrawer'
import Colors from '../src/components/Colors'
import LinkList from '../src/components/LinkList'
//import Dashboard from '@components/Dashboard';

export default function Index() {
  return (
    <>
      <MyDrawer />
      <Toolbar id="back-to-top-anchor" />
      <Typography component="div" classes={{ root: 'container' }}>
        <Container component="main" maxWidth="sm">
          <Box my={4}>
            <Typography variant="h4" component="h1" gutterBottom>
              Next.js example
            </Typography>
            <Link href="/about" color="secondary">
              Go to the about page
            </Link>
            <i className="material-icons">face</i>
          </Box>
          <Container maxWidth="xs">
            <LinkList />
          </Container>
          <Colors />
        </Container>
      </Typography>

      <Footer />
    </>
  )
}
