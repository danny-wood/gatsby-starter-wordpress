import React from "react"
import { PropTypes } from "prop-types"
import styled from "styled-components"

function LoadingIcon({ colour = "white", ...rest }) {
  const imgPath = getImagePath(colour)
  return <StyledLoadingIcon alt="Loading..." src={imgPath} {...rest} />
}

export default LoadingIcon

function getImagePath(colour) {
  switch (colour) {
    case "primary":
      return require("assets/images/loading-primary.svg")
    default:
      return require("assets/images/loading.svg")
  }
}

const StyledLoadingIcon = styled.img`
  width: 34px;
  margin-top: 4px;
`

LoadingIcon.propTypes = {
  colour: PropTypes.oneOf(["white", "primary"]),
}
