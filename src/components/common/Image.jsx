import React from "react"
import styled from "styled-components"

function Image({ src, alt, width, maxWidth = "100%", centre, ...rest }) {
  return (
    <StyledImage
      src={src}
      alt={alt}
      maxWidth={maxWidth}
      width={width}
      loading="lazy"
      centre={centre}
      {...rest}
    />
  )
}

export default Image

const StyledImage = styled.img`
  ${props => props.width && `width: ${props.width};`}
  max-width: ${props => props.maxWidth};
  ${props => props.centre && "margin-left: auto; margin-right: auto;"}
`
