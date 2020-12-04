import React from "react"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import "normalize.css"
import "bootstrap-4-grid/css/grid.min.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Layout from "components/ui/Layout"
import { NavProvider } from "hooks/useNav"
import Head from "components/ui/Head"

toast.configure()

export const wrapPageElement = ({ element, props }) => {
  return (
    <Layout {...props}>
      <Head />
      {element}
    </Layout>
  )
}

export const wrapRootElement = ({ element }) => {
  return <NavProvider>{element}</NavProvider>
}
