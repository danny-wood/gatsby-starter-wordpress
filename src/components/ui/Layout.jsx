import React from "react"
import PropTypes from "prop-types"
import styled, { createGlobalStyle } from "styled-components"
import { Container, Row, Col } from "reactstrap"
import { Helmet } from "react-helmet"
import styleUtil from "utils/styleUtil"
import Header from "components/ui/Header"
import Footer from "components/ui/Footer"

function Layout({ children }) {
  return (
    <LayoutContainer>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
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
    font-family: 'Montserrat', sans-serif;;
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
    color: ${styleUtil.primary};
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
