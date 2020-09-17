import { graphql } from "gatsby"

export const GraphQLFragments = graphql`
  fragment fullWidthText on WordPressAcf_full_width_text {
    __typename
    id
    content
  }
`
//TODO get type definitions working with a single fragment, before adding more.
// fragment heroBanner on WordPressAcf_hero_banner {
//     __typename
//     id
//     full_height
//     show_scroll_indicator
//     title
//     image
//     video {
//       url
//     }
//   }
