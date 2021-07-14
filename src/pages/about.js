import * as React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Jumbotron } from 'react-bootstrap';

import * as style from "../templates/single.module.css"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="About" />
      <article
        style={{
          margin: `0 auto`,
          padding: `1rem 2rem`,
        }}
      >
        <h1>{data.wpPage.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: data.wpPage.content }} />
      </article>
   
  </Layout>
)

export const query = graphql`
  query TestPageQuery {
    wpPage(uri: {eq: "/about/"}) {
      id
      title
      content
    }
  }
`

export default IndexPage