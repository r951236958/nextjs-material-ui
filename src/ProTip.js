import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Link from '@material-ui/core/Link'
import SvgIcon from '@material-ui/core/SvgIcon'
import Typography from '@material-ui/core/Typography'
import LightBulbIcon from './icons/LightBulbIcon'
//import styles from '../styles/Home.module.css'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(6, 0, 3)
  },
  lightBulb: {
    verticalAlign: 'middle',
    marginRight: theme.spacing(1)
  }
}))

export default function ProTip() {
  const classes = useStyles()
  return (
    <Typography
      classes={{
        root: classes.root
      }}
      color="textSecondary"
    >
      <LightBulbIcon classes={{ root: classes.lightBulb }} />
      Pro tip: See more{' '}
      <Link href="https://material-ui.com/getting-started/templates/">
        templates
      </Link>{' '}
      on the Material-UI documentation.
    </Typography>
  )
}
