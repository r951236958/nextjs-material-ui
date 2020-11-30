import React from 'react';
import { renderRoutes } from 'react-router-config';
import { Collapse, Divider, Icon, List, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuListLink from '../components/MenuListLink';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: 360,
  },
  lists: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(1),
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

function Devices({ route }) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const [selected, setSelected] = React.useState(false);

  const handleListItemClick = (event, index) => {
    setSelected(index);
  };

  return (
    <div className={classes.root}>
      <Typography variant="h3">Devices</Typography>
      <nav className={classes.lists} aria-label="devices lists">
        <List>
          <MenuListLink
            to="/devices"
            color="inherit"
            primary="數位裝置"
            icon={<Icon>devices_other</Icon>}
            open={open}
            onClick={handleClick}
          />
          <Divider />
          <Collapse component="li" in={open} timeout="auto" unmountOnExit>
            <List disablePadding>
              <MenuListLink
                to="/devices/mobile"
                color="primary"
                primary="Mobile"
                selected={selected === 1}
                onClick={(event) => handleListItemClick(event, 1)}
                icon={<Icon>phone_iphone</Icon>}
                className={classes.nested}
              />

              <MenuListLink
                to="/devices/desktop"
                color="secondary"
                primary="Desktop"
                selected={selected === 2}
                onClick={(event) => handleListItemClick(event, 2)}
                icon={<Icon>desktop_mac</Icon>}
                className={classes.nested}
              />

              <MenuListLink
                to="/devices/laptop"
                color="inherit"
                primary="Laptop"
                selected={selected === 3}
                onClick={(event) => handleListItemClick(event, 3)}
                icon={<Icon>laptop_mac</Icon>}
                className={classes.nested}
              />
            </List>
          </Collapse>
        </List>
      </nav>
      {renderRoutes(route.routes)}
    </div>
  );
}

export default Devices;
