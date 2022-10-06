import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"

export default function Home({data}) {
  console.log(data)
  const projects = data.projects.nodes
  const contact = data.contact.siteMetadata.email
  return (<>
    <div>
      {projects.map(p => 
        (
          <Link to={"/projects/" + p.frontmatter.slug} key={p.id}>
            <div>
              <h3>{p.frontmatter.title}</h3>
              <p>{p.frontmatter.stack}</p>
            </div>
          </Link>
        )
      )}
      <p>{contact}</p>
    </div>
    {/* <Layout /> */}
  </>
  )
}
// export const query = graphql`
//     query MyQuery {
//       projects: allMarkdownRemark(sort: {fields: frontmatter___date, order: ASC}) {
//         nodes {
//           frontmatter {
//             slug
//             stack
//             title
//           }
//           id
//         }
//       }
//       contact: site {
//         siteMetadata {
//           email
//         }
//       }
//     }
// `