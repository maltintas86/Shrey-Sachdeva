import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { InView } from "react-intersection-observer"

const Image = props => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(props.filename)
      })
      if (!image) {
        return null
      }

      return <Img className="work" style={{ height: "500px", width: "880px", borderRadius: "6px"}} alt={props.alt} fluid={image.node.childImageSharp.fluid} />
    }}
  />
)

export default Image
