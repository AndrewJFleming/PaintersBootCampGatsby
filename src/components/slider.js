import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Carousel } from 'react-bootstrap';

function Slider({  }) {
  const data = useStaticQuery(graphql`
  query {
    allFile(filter: {relativeDirectory: {eq: "homeSlider"}}) {
      nodes {
        name
        childImageSharp {
          fluid(maxWidth: 960) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`)

const images = data.allFile.nodes

  return (
    <Carousel fade variant="dark">
      {images.map((img, index) => (
        <Carousel.Item>
          <Img
            className="d-block w-100"
            fluid={img.childImageSharp.fluid}
            alt={img.name}
          />
          <Carousel.Caption>
            <h3>{img.name}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default Slider