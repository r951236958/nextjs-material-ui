import React from 'react'
import { Icon } from '@material-ui/core'

function Ele(props) {
  return (
    <div>
      <h3 className="py-3">Electronic</h3>
      <Icon className="fas fa-network-wired" />
      <Icon className="fas fa-sim-card" />
      <Icon className="fas fa-hdd" />
      <Icon className="fas fa-at" />
      <Icon className="fas fa-database" />
      <Icon className="fas fa-server" />
    </div>
  )
}

export default Ele
