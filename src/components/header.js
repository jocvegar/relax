import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import CssBaseline from "@material-ui/core/CssBaseline"
import useScrollTrigger from "@material-ui/core/useScrollTrigger"
import { makeStyles } from "@material-ui/core/styles"
import IconButton from "@material-ui/core/IconButton"
import InstagramIcon from "@material-ui/icons/Instagram"

function ElevationScroll(props) {
  const { children } = props
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  })
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: theme.spacing(1),
  },
}))

const Header = ({ siteTitle, text, props }) => {
  const classes = useStyles()
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <div className={classes.root}>
          <AppBar style={{ background: "#2E4500" }}>
            <Toolbar>
              <Typography variant="h6" style={{ flex: 1 }}>
                <Link
                  to="/"
                  style={{
                    color: `white`,
                    textDecoration: `none`,
                  }}
                >
                  {siteTitle}
                </Link>
              </Typography>
              <Typography variant="button" style={{ paddingRight: 2 }}>
                <div>
                  <Link
                    className={classes.menuButton}
                    to="/about/"
                    style={{
                      color: `white`,
                      textDecoration: `none`,
                    }}
                  >
                    About
                  </Link>
                  <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    className={classes.menuButton}
                    href="https://www.instagram.com/antsy.ant/"
                  >
                    <InstagramIcon />
                  </IconButton>
                </div>
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
      </ElevationScroll>
      <Toolbar />
    </React.Fragment>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  text: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  text: "JOSEC",
}

export default Header
