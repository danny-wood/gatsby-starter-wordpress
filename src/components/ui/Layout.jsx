import React from "react"
import PropTypes from "prop-types"
import styled, { createGlobalStyle } from "styled-components"
import vars from "../../styles/vars"
import Header from "./Header"
import Footer from "./Footer"
import { Container, Row, Col } from "reactstrap"
//import { Helmet } from "react-helmet"

function Layout({ children }) {
  return (
    <LayoutContainer>
      {/* This is one example of adding Google fonts */}
      {/* <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet> */}
      <GlobalStyle />
      <Header />
      <main>
        <Container>
          <Row>
            <Col>{children}</Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </LayoutContainer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    background-size: contain;
    font-size: 16px;
    line-height: 1.4;
  }

  .no-sroll{
    overflow: hidden;
  }
  
  main{
    flex-grow: 1;
  }

  h1,h2,h3{
    margin-top: 0;
    font-weight: 800;
  }

  a{
    text-decoration: none;
    color: ${vars.primary};
    transition: ease-in-out 200ms;
  }

  p{
    margin-top: 0;
  }

  .img-fluid {
    max-width: 100%;
  }


`

const LayoutContainer = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`
