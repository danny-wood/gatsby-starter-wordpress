import { createGlobalStyle } from "styled-components"
import vars from "styles/variables"

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Montserrat', sans-serif;
    line-height: 1.15;
  }

  .no-sroll{
    overflow: hidden;
  }

  main{
    flex-grow: 1;
  }

  /* If you set default link colour and hover, active, focus state then the button component
  will need to be updated also as the style changes will apply to the button */
  a{
    color: ${vars.black};
    text-decoration: none;

    &.primary-link{
      color: ${vars.primary};
      transition: ease-in-out 200ms;

      &:hover{
        color: ${vars.secondary};
      }

      &:active, &:focus{
        color: ${vars.primary};
      }
    }

  } 

  .img-fluid {
    max-width: 100%;
  }

  h1,h2,h3,h4,h5,h6,p{
    margin-top: 0;
  }

  a, input, button{
    outline: none;
  }
`
