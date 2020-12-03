import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Header from "components/ui/Header"
import Footer from "components/ui/Footer"

function Layout({ children }) {
  return (
    <LayoutContainer>
      <Header />
      <main>{children}</main>
      <Footer />
    </LayoutContainer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

const LayoutContainer = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`
