import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import React from 'react'

const useStyles = makeStyles({
  root: {
    width: '100%',
    h2: {
      fontWidth: 500
    }
  }
})

export default function Header({ title }) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Typography
        className={classes.h2}
        align="center"
        variant="h2"
        gutterBottom
      >
        {title}
      </Typography>
    </div>
  )
}