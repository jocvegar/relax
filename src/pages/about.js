import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { makeStyles } from "@material-ui/core/styles"
import color from "@material-ui/core/colors/amber"

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: 300,
    position: "absolute",
    left: 0,
    right: 0,
    backgroundColor: "#F5F8FA",
  },
}))

const About = () => {
  const classes = useStyles()
  return (
    <Layout>
      <SEO title="Count down" />
      <div className={classes.root}>hola</div>
    </Layout>
  )
}

export default About
