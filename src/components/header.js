import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import CssBaseline from "@material-ui/core/CssBaseline"
import useScrollTrigger from "@material-ui/core/useScrollTrigger"
import { makeStyles } from "@material-ui/core/styles"

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
    marginLeft: theme.spacing(2),
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
              <Typography variant="button" style={{ paddingRight: 5 }}>
                <div className={classes.menuButton}>
                  <Link
                    to="/about/"
                    style={{
                      color: `white`,
                      textDecoration: `none`,
                    }}
                  >
                    About
                  </Link>
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
  text: "JOSE C",
}

export default Header
