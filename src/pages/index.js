import React from "react"
import { Link } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import Paper from "@material-ui/core/Paper"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    paddingTop: 35,
  },
  // cardRoot: {
  //   minWidth: 275,
  // },

  card: {
    flex: 1,
  },

  cardActionRoot: {
    justifyContent: "center",
  },
  title: {
    fontSize: 16,
  },
  link: {
    textDecoration: `none`,
  },
  mainFeaturedPost: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: "url(https://source.unsplash.com/8e0EHPUx3Mo/1600x900)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.3)",
  },
  mainFeaturedPostContent: {
    position: "relative",
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}))

const mainFeaturedPost = {
  title: "Sometimes it’s OK to do nothing",
  description: "How beautiful it is to do nothing, and then to rest afterward.",
  image: "https://source.unsplash.com/8e0EHPUx3Mo/1600x900",
  imgText: "main image description",
  linkText: "Continue reading…",
}

const IndexPage = () => {
  const classes = useStyles()

  return (
    <Layout>
      <SEO title="Home" />
      <div className={classes.root}>
        <Paper
          className={classes.mainFeaturedPost}
          style={{ backgroundImage: `url(${mainFeaturedPost.image})` }}
        >
          <div className={classes.overlay} />
          <Grid container>
            <Grid item xs={12} md={6}>
              <div className={classes.mainFeaturedPostContent}>
                <Typography
                  component="h1"
                  variant="h3"
                  color="inherit"
                  gutterBottom
                >
                  {mainFeaturedPost.title}
                </Typography>
                <Typography variant="h5" color="inherit" paragraph>
                  {mainFeaturedPost.description}
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Paper>

        <Grid
          container
          spacing={4}
          direction="row"
          justify="space-evenly"
          alignItems="center"
        >
          <Grid item xs={12} md={6}>
            <Card className={classes.card}>
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  Breathe
                </Typography>
              </CardContent>
              <CardActions className={classes.cardActionRoot}>
                <Link to="/breathe/" className={classes.link}>
                  <Button variant="outlined" size="large" color="primary">
                    Go
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card className={classes.card}>
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  Count Down
                </Typography>
              </CardContent>
              <CardActions className={classes.cardActionRoot}>
                <Link to="/count-down/" className={classes.link}>
                  <Button variant="outlined" size="large" color="primary">
                    Go
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </div>

      {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div> */}

      {/* <Link to="/page-2/">Go to page 2</Link> */}
    </Layout>
  )
}

export default IndexPage
