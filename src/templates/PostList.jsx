// import React from "react"
// import { graphql } from "gatsby"
// import { useModules } from "hooks/useModules"
// import PageTitle from "components/common/PageTitle"
// import SEO from "components/common/SEO"

// function PostList({ data, pageContext }) {
//   const { modulesWithPosts } = useModules()
//   const moduleData = data?.wordpressPage?.acf || {}
//   const postData = {
//     items: data?.allWordpressPost?.nodes,
//     pageContext,
//   }

//   const { yoast_title, yoast_meta, path } = data?.wordpressPage || {}

//   return (
//     <>
//       <SEO yoastTitle={yoast_title} yoastMeta={yoast_meta} pagePath={path} />
//       <PageTitle title={data.wordpressPage.title} />
//       {modulesWithPosts(moduleData, postData)}
//     </>
//   )
// }

// export default PostList

// export const query = graphql`
//   query($skip: Int!, $limit: Int!) {
//     allWordpressPost(
//       skip: $skip
//       limit: $limit
//       sort: { fields: date, order: DESC }
//     ) {
//       nodes {
//         title
//         link
//         id
//         slug
//         content
//         path
//         date(formatString: "DD MMM YYYY")
//         featured_media {
//           url
//         }
//         excerpt
//       }
//     }
//     wordpressPage(slug: { eq: "blog" }) {
//       id
//       title
//       excerpt
//       content
//       slug
//       acf {
//         page_hero_slides {
//           ...heroSlides
//         }
//         page_hero_settings {
//           ...heroSettings
//         }
//         modules_page {
//           ...fullWidthText
//         }
//       }
//       yoast_title
//       yoast_meta {
//         name
//         content
//         property
//       }
//     }
//   }
// `
