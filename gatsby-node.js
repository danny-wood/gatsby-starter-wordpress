const path = require(`path`)
const slash = require(`slash`)
const paginate = require("gatsby-awesome-pagination").paginate

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
// Will create pages for WordPress pages (route : /{slug})
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // The “graphql” function allows us to run arbitrary
  // queries against the local Gatsby GraphQL schema. Think of
  // it like the site has a built-in database constructed
  // from the fetched data that you can run queries against.
  const result = await graphql(`
    {
      allWpPage(filter: { slug: { nin: ["blog"] } }) {
        edges {
          node {
            id
            uri
          }
        }
      }
      allWpPost {
        edges {
          node {
            id
            uri
          }
        }
      }
    }
  `)

  // Check for any errors
  if (result.errors) {
    throw new Error(result.errors)
  }

  // Access query results via object destructuring
  const { allWpPage } = result.data

  // Create Page pages.
  const pageTemplate = path.resolve(`./src/templates/Page.jsx`)
  // We want to create a detailed page for each page node.
  // The path field contains the relative original WordPress link
  // and we use it for the slug to preserve url structure.
  // The Page ID is prefixed with 'PAGE_'
  allWpPage.edges.forEach(edge => {
    // Gatsby uses Redux to manage its internal state.
    // Plugins and sites can use functions like "createPage"
    // to interact with Gatsby.
    createPage({
      // Each page is required to have a `path` as well
      // as a template component. The `context` is
      // optional but is often necessary so the template
      // can query data specific to each page.
      path: edge.node.uri,
      component: slash(pageTemplate),
      context: {
        id: edge.node.id,
      },
    })
  })

  // // Create Post pages.
  // const postTemplate = path.resolve(`./src/templates/Post.jsx`)
  // allWordpressPost.edges.forEach(edge => {
  //   createPage({
  //     path: edge.node.path,
  //     component: slash(postTemplate),
  //     context: {
  //       id: edge.node.id,
  //     },
  //   })
  // })

  // const postCategoryTemplate = path.resolve(`./src/templates/PostList.jsx`)
  // const postPrefix = "/blog"
  // const postsPerPage = 6

  // paginate({
  //   createPage,
  //   items: allWordpressPost.edges,
  //   itemsPerPage: postsPerPage,
  //   pathPrefix: postPrefix,
  //   component: postCategoryTemplate,
  // })
}
