import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { StyledSkills } from './style/StyledSkills'

export default function Skills() {
    const data = useStaticQuery(graphql`
        query GetSkills {
          allMarkdownRemark(
            filter: {fileAbsolutePath: {regex: "/skills/"}}
            sort: {fields: frontmatter___date, order: ASC}
          ) {
            edges {
              node {
                frontmatter {
                  title
                  date
                  type
                }
              }
            }
          }
        }
    `)
    
    const skill = data.allMarkdownRemark.edges
    console.log(skill)
    
    return (
      <StyledSkills id="skills">
        <h3>Design Skills</h3>
        {
          skill.map( s => 
            s.node.frontmatter.type === ('Design') && <><h4>{s.node.frontmatter.title} {s.node.frontmatter.type}</h4> <div><span></span></div></>
          )
        }
        <h3>Coding Skills</h3>
        {
          skill.map( s => 
            s.node.frontmatter.type === ('Code') && <><h4>{s.node.frontmatter.title} {s.node.frontmatter.type}</h4> <div><span></span></div></>
          )
        }
      </StyledSkills>
    )
}
