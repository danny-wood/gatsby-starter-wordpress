import React from "react"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import "bootstrap-4-grid/css/grid.min.css"
import Layout from "./src/components/ui/layout"
//import NavigationContextProvider from "./src/context/navigation-context-provider"

toast.configure()

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}

// export const wrapRootElement = ({ element }) => {
//   return <NavigationContextProvider>{element}</NavigationContextProvider>
// }
