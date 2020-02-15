import React from "react"
import { graphql } from "gatsby"
import { remarkForm } from "gatsby-tinacms-remark"

export default remarkForm(({ data }) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div>
  )
})

export const query = graphql`
  query MyQuery {
    markdownRemark(frontmatter: { title: { eq: "index.js" } }) {
      html
      frontmatter {
        title
      }
      ...TinaRemark
    }
  }
`
