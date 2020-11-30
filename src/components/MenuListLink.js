import { Icon, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
//import Link from '../Link'
import { Link as RouterLink } from 'react-router-dom';
//import routes from '../routes';

const useStyles = makeStyles((theme) => ({
  focused: {
    '&:focus': {
      backgroundColor: theme.palette.action.selected,
    },
  },
}));

function MenuListLink(props) {
  const classes = useStyles();

  const { icon, to, open, primary, ...other } = props;

  return (
    <li>
      <ListItem
        button
        component={RouterLink}
        to={to}
        {...other}
        className={classes.focused}
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
    </li>
  );
}

MenuListLink.propTypes = {
  icon: PropTypes.element,
  to: PropTypes.string.isRequired,
  primary: PropTypes.string.isRequired,
  open: PropTypes.bool,
};

export default MenuListLink;
