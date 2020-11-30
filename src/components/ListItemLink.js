/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import { makeStyles } from '@material-ui/core/styles'
import NextLink from 'next/link'
import MuiLink from '@material-ui/core/Link'
import { ListItem, ListItemText, ListItemIcon } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  focused: {
    '&:focus': {
      backgroundColor: theme.palette.action.selected,
    },
  },
}))

const NextComposed = React.forwardRef(function NextComposed(props, ref) {
  const { as, href, ...other } = props

  return (
    <NextLink href={href} as={as}>
      <a ref={ref} {...other} />
    </NextLink>
  )
})

NextComposed.propTypes = {
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  prefetch: PropTypes.bool,
}

// A styled version of the Next.js Link component:
// https://nextjs.org/docs/#with-link
function ListItemLink(props) {
  const classes = useStyles()

  const {
    icon,
    primary,
    to,
    href,
    activeClassName = 'active',
    className: classNameProps,
    innerRef,
    naked,
    ...other
  } = props

  const router = useRouter()
  const pathname = typeof href === 'string' ? href : href.pathname
  const className = clsx(classNameProps, {
    [activeClassName]: router.pathname === pathname && activeClassName,
  })

  if (naked) {
    return (
      <NextComposed
        className={className}
        ref={innerRef}
        href={href}
        {...other}
      />
    )
  }

  return (
    <ListItem
      button
      component={NextComposed}
      className={classes.focused}
      ref={innerRef}
      href={href}
      to={to}
      {...other}
    >
      {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
      <ListItemText primary={primary} />
    </ListItem>
  )
}

ListItemLink.propTypes = {
  activeClassName: PropTypes.string,
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  className: PropTypes.string,
  href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  naked: PropTypes.bool,
  onClick: PropTypes.func,
  prefetch: PropTypes.bool,
  icon: PropTypes.element,
  primary: PropTypes.string.isRequired,
  to: PropTypes.string,
}

export default React.forwardRef((props, ref) => (
  <ListItemLink {...props} innerRef={ref} />
))
