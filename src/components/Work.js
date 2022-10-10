import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import React from 'react'
import { StyledWork } from './style/StyledWork'

export default function Work() {
    const data = useStaticQuery(graphql`
        query {
          allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/work/"}}) {
            edges {
              node {
                fileAbsolutePath
                frontmatter {
                  title
                  image {
                    childImageSharp {
                      gatsbyImageData(placeholder: BLURRED, aspectRatio: 0.99, width: 1200)
                    }
                  }
                }
              }
            }
          }
        }
    `)
    const workImages = data.allMarkdownRemark.edges
    //console.log(workImages[0].node.frontmatter.title);

    return (
        <StyledWork>
            <h1>Here are the things I did!</h1>
            {
                workImages.map(workImages =>
                    <div key={workImages.node.frontmatter.title}>
                        <GatsbyImage image={getImage(workImages.node.frontmatter.image)} alt={workImages.node.frontmatter.title} />
                    </div>
                )
            }
        </StyledWork>
    )
}