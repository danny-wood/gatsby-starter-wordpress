const React = require("react")
require("react-toastify/dist/ReactToastify.css")
require("normalize.css")
require("bootstrap-4-grid/css/grid.min.css")
const Layout = require("components/ui/layout").default
const NavigationContextProvider = require("hooks/useNavigation").default

exports.wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}

exports.wrapRootElement = ({ element }) => {
  return <NavigationContextProvider>{element}</NavigationContextProvider>
}
