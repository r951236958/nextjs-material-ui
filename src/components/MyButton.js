import {
    Button, ButtonGroup,
    Card
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'


function ButtonS(props) {
  return <Button {...props} />
}

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1)
    }
  }
}))

function ContainedButtons() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Button variant="contained">Default</Button>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button variant="contained" color="secondary">
        Secondary
      </Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button variant="contained" color="primary" href="#contained-buttons">
        Link
      </Button>
    </div>
  )
}

function OutlinedButtons() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Button variant="outlined">Default</Button>
      <Button variant="outlined" color="primary">
        Primary
      </Button>
      <Button variant="outlined" color="secondary">
        Secondary
      </Button>
      <Button variant="outlined" disabled>
        Disabled
      </Button>
      <Button variant="outlined" color="primary" href="#outlined-buttons">
        Link
      </Button>
    </div>
  )
}

export default function MyButton() {
  const classes = useStyles()
  return (
    <Card className={classes.root} variant="outlined">
      <ContainedButtons />

      <ButtonGroup size="small" aria-label="small outlined button group">
        <ButtonS variant="contained" color="default">
          default
        </ButtonS>
        <ButtonS variant="outlined" color="default">
          default
        </ButtonS>
      </ButtonGroup>
      <ButtonGroup size="small" aria-label="small outlined button group">
        <ButtonS variant="contained" color="inherit">
          inherit
        </ButtonS>
        <ButtonS variant="outlined" color="inherit">
          inherit
        </ButtonS>
      </ButtonGroup>
      <ButtonGroup
        color="secondary"
        aria-label="outlined secondary button group"
      >
        <ButtonS variant="contained" color="primary">
          primary
        </ButtonS>
        <ButtonS variant="outlined" color="primary">
          primary
        </ButtonS>
      </ButtonGroup>
      <ButtonGroup
        size="large"
        color="primary"
        aria-label="large outlined primary button group"
      >
        <ButtonS variant="contained" color="secondary">
          secondary
        </ButtonS>
        <ButtonS variant="outlined" color="secondary">
          secondary
        </ButtonS>
      </ButtonGroup>

      <OutlinedButtons />
    </Card>
  )
}