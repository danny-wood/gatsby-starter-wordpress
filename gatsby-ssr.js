const React = require("react")
require("react-toastify/dist/ReactToastify.css")
require("normalize.css")
require("bootstrap-4-grid/css/grid.min.css")
const Layout = require("components/ui/layout").default
const { NavProvider } = require("hooks/useNav")

exports.wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}

exports.wrapRootElement = ({ element }) => {
  return <NavProvider>{element}</NavProvider>
}
