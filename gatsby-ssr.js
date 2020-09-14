const React = require("react")
const Layout = require("./src/components/ui/layout").default
require("react-toastify/dist/ReactToastify.css")
require("bootstrap-4-grid/css/grid.min.css")
// const NavigationContextProvider = require("./src/context/navigation-context-provider")
//   .default

exports.wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}

// exports.wrapRootElement = ({ element }) => {
//   return <NavigationContextProvider>{element}</NavigationContextProvider>
// }
