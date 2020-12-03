import React from "react"
import styled, { css } from "styled-components"
import { Link } from "gatsby"
import { lighten } from "polished"
import vars from "styles/variables"
import { ButtonTypeEnum } from "utils/buttonUtil"
import LoadingIcon from "components/common/LoadingIcon"

const Button = ({
  children,
  isLoading,
  styleType = ButtonTypeEnum.secondary,
  type,
  to,
  ...other
}) => {
  if (!to) {
    // No property for 'to' has been passed, return a form button
    return (
      <StyledButton
        styleType={styleType}
        type={type}
        isLoading={isLoading}
        disabled={isLoading}
        {...other}
      >
        {isLoading ? <LoadingIcon /> : children}
      </StyledButton>
    )
  } else {
    // The 'to' property has a value, retrun an internal or external link.
    // The below regex assumes that any internal link will start with exactly one slash, and that anything else is external.
    const internal = /^\/(?!\/)/.test(to)

    if (internal) {
      return (
        <StyledButton
          as={({ styleType, isLoading, ...rest }) => <Link {...rest} />}
          to={to}
          styleType={styleType}
          {...other}
        >
          {children}
        </StyledButton>
      )
    } else {
      return (
        <StyledButton as="a" href={to} styleType={styleType} {...other}>
          {children}
        </StyledButton>
      )
    }
  }
}

export default Button

const ButtonStyle = css`
  min-width: 230px;
  display: inline-block;
  text-decoration: none;
  padding: ${props => (props.isLoading ? "3px" : "15px")};
  cursor: pointer;
  text-align: center;
  line-height: 1;
  border: none;
  color: ${vars.white};
  opacity: 1;
  transition: ease-in-out 200ms;
  background: ${props => getButtonBackground(props.styleType)};

  &:hover {
    background: ${props => lighten(0.05, getButtonBackground(props.styleType))};
  }

  &:disabled,
  &[disabled] {
    opacity: 0.5;
  }
`

function getButtonBackground(styleType) {
  return (
    (styleType === ButtonTypeEnum.secondary && vars.secondary) ||
    (styleType === ButtonTypeEnum.lightBlue && vars.lightBlue) ||
    (styleType === ButtonTypeEnum.blue && vars.blue) ||
    (styleType === ButtonTypeEnum.black && vars.black) ||
    vars.primary
  )
}

const StyledButton = styled(({ styleType, isLoading, ...rest }) => (
  <button {...rest} />
))`
  ${ButtonStyle}
`
