import React from "react"
import { Helmet } from "react-helmet"
import { GlobalStyle } from "styles/globalStyle"

function Head() {
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyle />
    </>
  )
}

export default Head
