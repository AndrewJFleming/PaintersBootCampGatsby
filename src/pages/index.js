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

      <Jumbotron fluid className="jumbo">
        <Container>
          {data.wpPage.featuredImage && (
            <figure className={style.homeImg}>
              <Img
                fluid={data.wpPage.featuredImage.node.localFile.childImageSharp.fluid}
                alt={data.wpPage.featuredImage.node.altText}
              />
            </figure>
          )}
        </Container>
      </Jumbotron>
      <Container>
        <div dangerouslySetInnerHTML={{ __html: data.wpPage.content }} />
      </Container>
   
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