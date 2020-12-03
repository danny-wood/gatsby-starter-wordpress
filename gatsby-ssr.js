const React = require("react")
require("react-toastify/dist/ReactToastify.css")
require("normalize.css")
require("bootstrap-4-grid/css/grid.min.css")
require("slick-carousel/slick/slick.css")
require("slick-carousel/slick/slick-theme.css")
const Layout = require("components/ui/Layout").default
const { NavProvider } = require("hooks/useNav")
const Head = require("components/ui/Head").default

exports.wrapPageElement = ({ element, props }) => {
  return (
    <Layout {...props}>
      <Head /> {element}
    </Layout>
  )
}

exports.wrapRootElement = ({ element }) => {
  return <NavProvider>{element}</NavProvider>
}
