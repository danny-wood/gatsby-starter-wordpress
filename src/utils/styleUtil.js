import vars from "styles/variables"
import { ButtonTypeEnum } from "utils/buttonUtil"

export function getColour(colour) {
  switch (colour) {
    case "primary":
      return vars.primary
    case "secondary":
      return vars.secondary
    default:
      return vars.black
  }
}

export function getButtonTypeEnum(value) {
  switch (value) {
    case "secondary":
      return ButtonTypeEnum.secondary
    default:
      return ButtonTypeEnum.primary
  }
}
