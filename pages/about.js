import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import React from 'react'
import MyList from '../src/components/MyList'
import TopBar from '../src/components/TopBar'
import Copyright from '../src/Copyright'
import Link from '../src/Link'
import ProTip from '../src/ProTip'
import styles from '../styles/Home.module.css'

export default function Index() {
  return (
    <div className={styles.container}>
      <TopBar />
      <main className={styles.main}>
        <Container maxWidth="md">
          <h1 className={styles.title}>
            <a href="https://nextjs.org">Next.js</a> example
          </h1>

          <p className={styles.description}>
            This is {' '}
            <code className={styles.code}>`pages/about.js`</code>
          </p>

          <Box className={styles.center} my={4}>
            <Button
              variant="contained"
              color="primary"
              component={Link}
              naked
              href="/"
            >
              Go to the main page
            </Button>
          </Box>

          <Container maxWidth="xs">
            <MyList />
          </Container>
        </Container>
        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.nextjscard}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.nextjscard}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.nextjscard}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.nextjscard}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
        <ProTip />
        <Copyright />
      </main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
