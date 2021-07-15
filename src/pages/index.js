import * as React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Jumbotron, Carousel } from 'react-bootstrap';

import * as style from "../templates/single.module.css"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>

  <Seo title="Home" />

    {/* <Jumbotron fluid className="jumbo">
        {data.wpPage.featuredImage && (
          <figure className={style.homeImg}>
            <Img
              fluid={data.wpPage.featuredImage.node.localFile.childImageSharp.fluid}
              alt={data.wpPage.featuredImage.node.altText}
            />
          </figure>
        )}
    </Jumbotron> */}

    <Carousel>
      {data.allFile.nodes.map((file, index) => (
        <Carousel.Item>
          <Img
            className="d-block w-100"
            fluid={file.childImageSharp.fluid}
            alt={file.name}
          />
          <Carousel.Caption>
            <h3>{file.name}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>

    <article
      style={{
        margin: `0 auto`,
        padding: `1rem 2rem`,
      }}
    >
      <div dangerouslySetInnerHTML={{ __html: data.wpPage.content }} />
    </article>

  </Layout>
)

export const query = graphql`
  query HomePageQuery {
    wpPage(uri: {eq: "/"}) {
      id
      title
      content
      # featuredImage {
      #   node {
      #     localFile {
      #       childImageSharp {
      #         fluid(maxWidth: 1360) {
      #           ...GatsbyImageSharpFluid
      #         }
      #       }
      #     }
      #     altText
      #   }
      # }
    }
    allFile(
      filter: {dir: {eq: "D:/Program Files/Git/gatsby/PaintersBootCampGatsby/src/images/homeSlider"}}
    ) {
      nodes {
        name
        childImageSharp {
          fluid(maxWidth: 1360) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

export default IndexPage