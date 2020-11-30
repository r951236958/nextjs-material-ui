import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { ListItem, ListItemIcon, ListItemText, Icon } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
//import routes from '../routes';

const useStyles = makeStyles((theme) => ({
  navitem: {
    padding: theme.spacing(1, 2),
    marginLeft: theme.spacing(4),
    '&:focus': {
      color: theme.palette.secondary.main,
      backgroundColor: theme.palette.action.selected,
      borderBottom: 1,
      borderColor: theme.palette.secondary.main,
    },
  },
}));

function NavItemLink(props) {
  const classes = useStyles();

  const { icon, to, open, primary, ...other } = props;

  return (
    <ListItem
      button
      component={NavLink}
      to={to}
      {...other}
      className={classes.navitem}
    >
      {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
      <ListItemText primary={primary} />
      {open != null ? (
        open ? (
          <Icon>expand_less</Icon>
        ) : (
          <Icon>expand_more</Icon>
        )
      ) : null}
    </ListItem>
  );
}

NavItemLink.propTypes = {
  icon: PropTypes.element,
  to: PropTypes.string.isRequired,
  primary: PropTypes.string.isRequired,
  open: PropTypes.bool,
};

export default NavItemLink;
