//TODO Complete type definition setup, this link might help: https://github.com/gatsbyjs/gatsby/issues/16809
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
      type WordPressAcf_full_width_text implements Node @dontInfer {
        id: ID!
        content: String
      }
    `
  createTypes(typeDefs)
}
