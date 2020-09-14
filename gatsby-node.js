//TODO: Restructure file and remove any unused functions / graphql queries

// const path = require(`path`)
// const slash = require(`slash`)
// const paginate = require("gatsby-awesome-pagination").paginate

// //https://github.com/gatsbyjs/gatsby/issues/3344#issuecomment-505396871
// //NOTE: We need to add type definitions for all our components so gatsby build doesn't fail
// //when we have a component which isn't on any pages. Below is an example from the above github link,
// //we need to amend the type defnitions to fit our page modules.
// exports.sourceNodes = ({ actions }) => {
//   const { createTypes } = actions
//   const typeDefs = `
//     type wordpress__PAGE implements Node {
//       acf: wordpress__PAGEAcf
//     }
//     type wordpress__PAGEAcf implements Node {
//       enter_content: String
//     }

//   `
//   createTypes(typeDefs)
// }

// //// TODO: Complete custom type definitions
// //
// // exports.sourceNodes = ({ actions }) => {
// //   const { createTypes } = actions
// //   const typeDefs = `

// //     union AcfContentUnion =
// //       WordPressAcf_mod__h1 |
// //       WordPressAcf_mod__hero_banner

// //     type wordpress__PAGE implements Node {
// //       acf: wordpress__PAGEAcf
// //     }

// //     type wordpress__PAGEAcf implements Node {
// //       enter_content: [AcfContentUnion] @link(from: "modules_page___NODE")
// //     }

// //     type WordPressAcf_mod__h1 implements Node {
// //       mod__h1: String
// //       mod__h1_position: Int
// //     }

// //     type WordPressAcf_mod__hero_banner implements Node {
// //       mod__hero_banner_image: String
// //     }

// //   `
// //   createTypes(typeDefs)
// // }

// // Implement the Gatsby API “createPages”. This is
// // called after the Gatsby bootstrap is finished so you have
// // access to any information necessary to programmatically
// // create pages.
// // Will create pages for WordPress pages (route : /{slug})
// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions

//   // The “graphql” function allows us to run arbitrary
//   // queries against the local Gatsby GraphQL schema. Think of
//   // it like the site has a built-in database constructed
//   // from the fetched data that you can run queries against.
//   const result = await graphql(`
//     {
//       allWordpressPage(filter: { slug: { nin: ["news", "our-work"] } }) {
//         edges {
//           node {
//             id
//             path
//             status
//             template
//             slug
//           }
//         }
//       }
//       allWordpressPost {
//         edges {
//           node {
//             id
//             status
//             path
//             template
//             slug
//             title
//           }
//         }
//         group(field: categories___slug) {
//           nodes {
//             id
//             title
//           }
//           fieldValue
//         }
//       }
//       allWordpressWpVacancies {
//         edges {
//           node {
//             id
//             status
//             path
//             template
//             slug
//           }
//         }
//       }
//       allWordpressWpOurWork {
//         edges {
//           node {
//             id
//             status
//             path
//             template
//             slug
//           }
//         }
//         group(field: our_work_category___Slug) {
//           nodes {
//             id
//             title
//           }
//           fieldValue
//         }
//       }
//     }
//   `)

//   // Check for any errors
//   if (result.errors) {
//     throw new Error(result.errors)
//   }

//   // Access query results via object destructuring
//   const {
//     allWordpressPage,
//     allWordpressPost,
//     allWordpressWpVacancies,
//     allWordpressWpOurWork,
//   } = result.data

//   // Create Page pages.
//   const pageTemplate = path.resolve(`./src/templates/page.js`)
//   // We want to create a detailed page for each page node.
//   // The path field contains the relative original WordPress link
//   // and we use it for the slug to preserve url structure.
//   // The Page ID is prefixed with 'PAGE_'
//   allWordpressPage.edges.forEach(edge => {
//     // Gatsby uses Redux to manage its internal state.
//     // Plugins and sites can use functions like "createPage"
//     // to interact with Gatsby.
//     createPage({
//       // Each page is required to have a `path` as well
//       // as a template component. The `context` is
//       // optional but is often necessary so the template
//       // can query data specific to each page.
//       path: edge.node.path,
//       component: slash(pageTemplate),
//       context: {
//         id: edge.node.id,
//       },
//     })
//   })

//   // Create Post pages.
//   const postTemplate = path.resolve(`./src/templates/post.js`)
//   allWordpressPost.edges.forEach(edge => {
//     createPage({
//       path: edge.node.slug,
//       component: slash(postTemplate),
//       context: {
//         id: edge.node.id,
//       },
//     })
//   })

//   const postCategoryTemplate = path.resolve(`./src/templates/postList.js`)
//   const postPrefix = "/news"
//   const postsPerPage = 9

//   paginate({
//     createPage,
//     items: allWordpressPost.edges,
//     itemsPerPage: postsPerPage,
//     pathPrefix: postPrefix,
//     component: postCategoryTemplate,
//   })

//   allWordpressPost.group.forEach(({ nodes: posts, fieldValue: category }) => {
//     if (category !== "all") {
//       paginate({
//         createPage,
//         items: posts,
//         itemsPerPage: postsPerPage,
//         pathPrefix: `${postPrefix}/${category}`,
//         component: postCategoryTemplate,
//         context: {
//           slug: category,
//         },
//       })
//     }
//   })

//   // Create Vacancy pages.
//   const vacancyTemplate = path.resolve(`./src/templates/vacancy.js`)
//   allWordpressWpVacancies.edges.forEach(edge => {
//     createPage({
//       path: edge.node.path,
//       component: slash(vacancyTemplate),
//       context: {
//         id: edge.node.id,
//       },
//     })
//   })

//   // Create Our Work pages.
//   allWordpressWpOurWork.edges.forEach(edge => {
//     createPage({
//       path: edge.node.path,
//       component: slash(pageTemplate),
//       context: {
//         id: edge.node.id,
//       },
//     })
//   })

//   const ourWorkCategoryTemplate = path.resolve(`./src/templates/ourWorkList.js`)
//   const ourWorkPrefix = "/our-work"
//   const ourWorkPerPage = 3

//   paginate({
//     createPage,
//     items: allWordpressWpOurWork.edges,
//     itemsPerPage: ourWorkPerPage,
//     pathPrefix: ourWorkPrefix,
//     component: ourWorkCategoryTemplate,
//   })

//   allWordpressWpOurWork.group.forEach(({ nodes, fieldValue }) => {
//     if (fieldValue !== "all") {
//       paginate({
//         createPage,
//         items: nodes,
//         itemsPerPage: ourWorkPerPage,
//         pathPrefix: `${ourWorkPrefix}/${fieldValue}`,
//         component: ourWorkCategoryTemplate,
//         context: {
//           slug: fieldValue,
//         },
//       })
//     }
//   })
// }
