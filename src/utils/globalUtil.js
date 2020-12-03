// If you have your WP site on a subdomain of cms, use this function to convert to www version.
export function convertCmsDomainToLiveDomain(url) {
  return url.replace("https://cms", "https://www")
}

// This function is used for converting domains from the WP site into internal domain paths
// for example, a link with this path: https://cms.YOURWEBSITEDOMAIN.co.uk/contact-us
// would be converted to and internal link to use in gatsby: /contact-us
export function convertToInternalUrl(url) {
  //TODO: Check to see if we can get the domain from env variables, we might need to prefix this env variable
  //TODO: with GATSBY so we can access it.
  console.log("Domain from env variables", process.env.WP_DOMAIN)
  if (url) {
    return removeTrailingSlash(
      url.replace("https://cms.YOURWEBSITEDOMAIN.co.uk", "")
    )
  }
  return url
}

// Regex for removing trailing slashes from a string
export function removeTrailingSlash(text) {
  return text.replace(/\/$/, "")
}

// Used for page filters to display a list of categories, excluding a category
export function withoutCategory(categories, value) {
  return categories.filter(function (e) {
    return e.Name !== value
  })
}
