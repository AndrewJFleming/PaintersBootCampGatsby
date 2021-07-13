import * as React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Jumbotron, Container } from 'react-bootstrap';

import * as style from "../templates/single.module.css"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <article className={style.article}>
      {data.wpPage.featuredImage && (
        <figure className={style.homeImg}>
          <Img
            fluid={data.wpPage.featuredImage.node.localFile.childImageSharp.fluid}
            alt={data.wpPage.featuredImage.node.altText}
          />
        </figure>
      )}
    </article>

      <Jumbotron fluid className="jumbo">
        <Container>
          <div dangerouslySetInnerHTML={{ __html: data.wpPage.content }} />
        </Container>
      </Jumbotron>
   
  </Layout>
)

export const query = graphql`
  query HomePageQuery {
    wpPage(uri: {eq: "/"}) {
      id
      title
      content
      featuredImage {
        node {
          localFile {
            childImageSharp {
              fluid(maxWidth: 1360) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          altText
        }
      }
    }
  }
`

export default IndexPage