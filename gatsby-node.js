const { createFilePath } = require("gatsby-source-filesystem")
const path = require("path")
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  //  console.log(node.internal.type);

  if (node.internal.type === "MarkdownRemark") {
    //console.log(createFilePath({node, getNode, basePath: "posts"}))

    const slug = createFilePath({ node, getNode, basePath: "posts" })
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allWordpressPost {
        nodes {
          slug
        }
      }
    }
  `).then(result => {
    result.data.allWordpressPost.nodes.forEach(node => {
      createPage({
        path: node.slug,
        component: path.resolve("./src/layouts/BlogpostLayout.js"),
        context: {
          slug: node.slug,
        },
      })
    })
  })
}
