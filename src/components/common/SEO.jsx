import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { removeTrailingSlash } from "utils/globalUtil"

//TODO: We need an og image
function SEO({ yoastTitle, yoastMeta, pagePath }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
          }
        }
      }
    `
  )

  const metaTitle = yoastTitle || site.siteMetadata.title
  //const metaDescription = yoastDescription || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang: "en",
      }}
      title={metaTitle}
      meta={[...yoastMeta]}
    >
      {pagePath && (
        <link
          rel="canonical"
          href={removeTrailingSlash(`${site.siteMetadata.siteUrl}${pagePath}`)}
        />
      )}

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "http://schema.org",
          "@type": "Organization",
          name: "YOUR SITE NAME",
          url: "YOUR SITE URL",
          address: {
            "@type": "PostalAddress",
            streetAddress: "YOUR ADDRESS",
            addressLocality: "",
            addressRegion: "",
            postalCode: "",
            addressCountry: "",
          },
        })}
      </script>
    </Helmet>
  )
}

SEO.defaultProps = {
  yoastTitle: ``,
  yoastMeta: [],
}

SEO.propTypes = {
  yoastTitle: PropTypes.string,
  yoastMeta: PropTypes.arrayOf(PropTypes.object),
}

export default SEO
