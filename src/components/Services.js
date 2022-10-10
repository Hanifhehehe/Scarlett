import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { StyledServices } from './style/StyledServices'

export default function Services() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: {
            fileAbsolutePath: {
            regex: "/services/"
            }
          }
          sort: {
            fields: frontmatter___date,
            order: ASC
          }) {
        edges {
          node {
            frontmatter {
              title
              icon
            }
            rawMarkdownBody
          }
        }
      }
    }
`)

  const services= data.allMarkdownRemark.edges
  // console.log(services)
  return (
    <StyledServices>
      {
        services.map( s => 
          <div key={s.node.frontmatter.title}>
            <img src={s.node.frontmatter.icon} />
            <h3>{s.node.frontmatter.title}</h3>
            <p>{s.node.rawMarkdownBody.slice(0,101)}</p>
          </div>
        )
      }
    </StyledServices>
  )
}
