export function convertCmsDomainToLiveDomain(url) {
  return url.replace("https://cms", "https://www")
}

export function convertToInternalUrl(url) {
  if (url) {
    return url
      .replace("https://cms.YOURWEBSITEDOMAIN.co.uk", "") // Remove domain
      .replace(/\/$/, "") // Remove trailing slash
  }
  return url
}

export function withoutCategory(categories, value) {
  return categories.filter(function (e) {
    return e.Name !== value
  })
}
