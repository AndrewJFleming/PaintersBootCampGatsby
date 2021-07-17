import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Jumbotron } from 'react-bootstrap'
import * as style from "../templates/single.module.css"

function JumbotronComponent({  }) {
  const data = useStaticQuery(graphql`
  query {
    wpPage(uri: {eq: "/"}) {
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
`)

  return (
    <Jumbotron fluid className="jumbo">
        {data.wpPage.featuredImage && (
          <figure className={style.homeImg}>
            <Img
              fluid={data.wpPage.featuredImage.node.localFile.childImageSharp.fluid}
              alt={data.wpPage.featuredImage.node.altText}
            />
          </figure>
        )}
    </Jumbotron>
  )
}

export default JumbotronComponent