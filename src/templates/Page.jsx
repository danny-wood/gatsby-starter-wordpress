import React from "react"
import { graphql } from "gatsby"
import { useModules } from "hooks/useModules"
import PageTitle from "components/common/PageTitle"
import SEO from "components/common/SEO"

function Page({ data, location }) {
  const { modules } = useModules(location)
  const moduleData = data?.wordpressPage?.acf || {}

  const { yoast_title, yoast_meta, path } = data?.wordpressPage || {}

  return (
    <>
      <SEO yoastTitle={yoast_title} yoastMeta={yoast_meta} pagePath={path} />
      <PageTitle title={data.wordpressPage.title} />
      {modules(moduleData)}
    </>
  )
}

export default Page

export const query = graphql`
  query($id: String!) {
    wordpressPage(id: { eq: $id }) {
      id
      title
      excerpt
      content
      slug
      acf {
        page_hero_slides {
          ...heroSlides
        }
        page_hero_settings {
          ...heroSettings
        }
        modules_page {
          ...fullWidthText
        }
      }
      yoast_title
      yoast_meta {
        name
        content
        property
      }
    }
  }
`
