import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "@material-ui/core/Container"

import "./breath.css"

const SecondPage = () => (
  <Layout>
    <SEO title="Breath" />
    <Container fixed={true}>
      <div className="container">
        <div className="watch-face">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
      </div>
    </Container>
  </Layout>
)

export default SecondPage
