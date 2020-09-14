import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import styleUtil from "utils/styleUtil"
import ButtonTypeEnum from "enums/buttonTypeEnum"
import LoadingIcon from "components/common/LoadingIcon"

const Button = ({
  children,
  isLoading,
  styleType = ButtonTypeEnum.primary,
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

const StyledButton = styled(({ styleType, isLoading, ...rest }) => (
  <button {...rest} />
))`
  min-width: 250px;
  font-weight: 600;
  display: inline-block;
  text-decoration: none;
  padding: ${props => (props.isLoading ? 0 : "15px")};
  border-radius: 50px;
  font-size: 16px;
  cursor: pointer;
  height: 50px;
  text-align: center;
  outline: none;
  line-height: 17px;

  border: ${props =>
      (props.styleType === ButtonTypeEnum.whiteOutline && "2px") || "0"}
    solid
    ${props =>
      (props.styleType === ButtonTypeEnum.primary && styleUtil.primaryColour) ||
      (props.styleType === ButtonTypeEnum.secondary &&
        styleUtil.secondaryColour) ||
      (props.styleType === ButtonTypeEnum.white && styleUtil.white) ||
      (props.styleType === ButtonTypeEnum.whiteOutline && styleUtil.white) ||
      styleUtil.black};

  color: ${props =>
    (props.styleType === ButtonTypeEnum.primary && styleUtil.white) ||
    (props.styleType === ButtonTypeEnum.secondary && styleUtil.black) ||
    (props.styleType === ButtonTypeEnum.white && styleUtil.paleOrange) ||
    (props.styleType === ButtonTypeEnum.whiteOutline && styleUtil.white) ||
    styleUtil.black};

  background: ${props =>
    (props.styleType === ButtonTypeEnum.primary && styleUtil.primaryGradient) ||
    (props.styleType === ButtonTypeEnum.secondary &&
      styleUtil.secondaryColour) ||
    (props.styleType === ButtonTypeEnum.white && styleUtil.white)};
`
