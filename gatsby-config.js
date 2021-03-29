require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || "development"}`,
})

const path = require("path")
// Netlify config for deployment previews. TODO: uncomment and set domain name. https://www.your-site-domain.co.uk
const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = `https://${process.env.SITE_DOMAIN}`,
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env
const isNetlifyProduction = NETLIFY_ENV === "production"
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL
//--

module.exports = {
  siteMetadata: {
    title: `Gatsby Starter Wordpress`,
    description: `Base Gatsby Project`,
    author: `@danny-wood`,
    siteUrl,
  },
  plugins: [
    // {
    //   resolve: "gatsby-source-gravityforms",
    //   options: {
    //     // Base URL needs to include protocol (http/https)
    //     baseUrl: `https://${process.env.WP_DOMAIN}`,
    //     // Gravity Forms API
    //     api: {
    //       key: process.env.GF_CONSUMER_KEY,
    //       secret: process.env.GF_CONSUMER_SECRET,
    //     },
    //   },
    // },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        root: __dirname,
        src: path.join(__dirname, "src"),
        animations: path.join(__dirname, "src/animations"),
        assets: path.join(__dirname, "src/assets"),
        components: path.join(__dirname, "src/components"),
        enums: path.join(__dirname, "src/enums"),
        hooks: path.join(__dirname, "src/hooks"),
        pages: path.join(__dirname, "src/pages"),
        styles: path.join(__dirname, "src/styles"),
        utils: path.join(__dirname, "src/utils"),
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/assets/icons/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    // `gatsby-plugin-netlify`,
    // {
    //   resolve: `gatsby-plugin-robots-txt`,
    //   options: {
    //     host: siteUrl,
    //     resolveEnv: () => NETLIFY_ENV,
    //     env: {
    //       production: {
    //         //policy: [{ userAgent: "*" }], //TODO: Uncomment when live and remove below line
    //         policy: [{ userAgent: "*", disallow: ["/"] }],
    //       },
    //       "branch-deploy": {
    //         policy: [{ userAgent: "*", disallow: ["/"] }],
    //         sitemap: null,
    //         host: null,
    //       },
    //       "deploy-preview": {
    //         policy: [{ userAgent: "*", disallow: ["/"] }],
    //         sitemap: null,
    //         host: null,
    //       },
    //     },
    //   },
    // },
    // `gatsby-plugin-remove-trailing-slashes`,
    //-----------------
    // Google Analytics. Set GTM code before using.
    //-----------------
    // {
    //   resolve: "gatsby-plugin-google-tagmanager",
    //   options: {
    //     id: process.env.GTM_CODE,

    //     // Include GTM in development.
    //     // Defaults to false meaning GTM will only be loaded in production.
    //     includeInDevelopment: true,

    //     // datalayer to be set before GTM is loaded
    //     // should be an object or a function that is executed in the browser
    //     // Defaults to null
    //     defaultDataLayer: { platform: "gatsby" },
    //   },
    // },

    //-----------------
    // Sitemap
    //-----------------
    // {
    //   resolve: `gatsby-plugin-sitemap`,
    //   options: {
    //     output: `/sitemap.xml`,
    //     exclude: [`/thank-you`, `/modules`],
    //     query: `
    //       {
    //         site {
    //           siteMetadata {
    //             siteUrl
    //           }
    //         }
    //         allSitePage {
    //           nodes {
    //             path
    //           }
    //         }
    //     }`,
    //     resolveSiteUrl: ({ site, allSitePage }) => {
    //       return site.siteMetadata.siteUrl
    //     },
    //     serialize: ({ site, allSitePage }) =>
    //       allSitePage.nodes.map(node => {
    //         return {
    //           url: `${site.siteMetadata.siteUrl}${node.path.replace(
    //             /\/$/,
    //             ""
    //           )}`,
    //           changefreq: `daily`,
    //           priority: 0.7,
    //         }
    //       }),
    //   },
    // },
    //-----------------
    // Wordpress
    //-----------------
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `https://${process.env.WP_DOMAIN}/core/graphql`,
        // verbose: true,
        // debug: {
        //   preview: true,
        //   timeBuildSteps: true,
        //   graphql: {
        //     showQueryVarsOnError: true,
        //   },
        // },
      },
    },
  ],
}
