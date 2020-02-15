import React from "react"
import { graphql } from "gatsby"
 
export default ({ data }) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div>
  )
}
 
export const query = graphql`
  query MyQuery {
    markdownRemark(frontmatter: { title: { eq: "index.js" } }) {
      html
    }
  }
`
