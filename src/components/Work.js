import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import React from 'react'
import { StyledWork } from './style/StyledWork'

export default function Work() {
    const data = useStaticQuery(graphql`
        query MyQuery {
            images: allMarkdownRemark {
                nodes {
                    frontmatter {
                        image {
                            childImageSharp {
                                gatsbyImageData(placeholder: BLURRED, aspectRatio: 0.99, width: 1200)
                            }
                        }
                    }
                }
            }
        }
    `)
    const workImages = data.images.nodes

    return (
        <StyledWork>
            {
                workImages.map(workImages =>
                    <GatsbyImage image={getImage(workImages.frontmatter.image.childImageSharp)} />
                )
            }
        </StyledWork>
    )
}