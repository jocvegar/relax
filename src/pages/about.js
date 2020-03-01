import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { makeStyles } from "@material-ui/core/styles"
import grey from "@material-ui/core/colors/grey"
import Avatar from "@material-ui/core/Avatar"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: 300,
    position: "absolute",
    left: 0,
    right: 0,
    backgroundColor: grey[100],
  },
  container: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "stretch",
    paddingTop: 50,
  },

  largeAvatar: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
}))

const About = () => {
  const classes = useStyles()

  return (
    <Layout>
      <SEO title="Count down" />
      <div className={classes.root}>
        <div className={classes.container}>
          <Avatar
            alt="Jose V"
            src="https://s.gravatar.com/avatar/359fbf62c0b92f8c6c063b35b92ea280?s=200"
            className={classes.largeAvatar}
          />
          <Typography variant="h3">Jose Vega</Typography>
        </div>
      </div>
    </Layout>
  )
}

export default About
