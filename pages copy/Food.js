import React from 'react'
import { Icon } from '@material-ui/core'

function Food(props) {
  return (
    <div>
      <h3 className="py-3">Food</h3>
      <Icon className="fas fa-hotdog" />
      <Icon className="fas fa-cheese" />
      <Icon className="fas fa-apple-alt" />
      <Icon className="fas fa-egg" />
    </div>
  )
}

export default Food
