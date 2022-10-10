import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import React from 'react'
import { StyledWork } from './style/StyledWork'

export default function Work() {
    const data = useStaticQuery(graphql`
        query MyQuery {
            allImageSharp {
                edges {
                    node {
                        gatsbyImageData(placeholder: BLURRED, aspectRatio: 0.99, width: 1200)
                    }
                }
            }
        }
    `)
    const workImages = data.allImageSharp.edges
    // console.log(workImages);

    return (
        <StyledWork>
            {
                workImages.map(workImages =>
                    <GatsbyImage image={getImage(workImages.node)} />
                )
            }
        </StyledWork>
    )
}