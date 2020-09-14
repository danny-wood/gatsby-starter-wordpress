// Colours
const black = "#000000"
const white = "#ffffff"
const pink = "#fe019a"
const purple = "#9901fe"

const grey_100 = "#f2f2f2"
const grey_200 = "#eeeeee"
const grey_300 = "#dcdcdc"
const grey_400 = "#d1d1d1"
const grey_500 = "#c2c2c2"
const grey_600 = "#aaaaaa"
const grey_700 = "#6f6f6f"
const grey_800 = "#333333"
const grey_900 = "#202020"

const primary = pink
const secondary = purple

const primaryGradient = `linear-gradient(90deg, ${primary}, ${secondary})`

const blackTransparent = (transparency = "0.5") =>
  `rgba(0, 0, 0, ${transparency})`

const whiteTransparent = (transparency = "0.5") =>
  `rgba(255, 255, 255, ${transparency})`

// Breakpoints
const screen_xs_max = "575px"
const screen_sm_min = "576px"
const screen_sm_max = "767px"
const screen_md_min = "768px"
const screen_md_max = "991px"
const screen_lg_min = "992px"
const screen_lg_max = "1199px"
const screen_xl_min = "1200px"

export default {
  black,
  white,
  pink,

  grey_100,
  grey_200,
  grey_300,
  grey_400,
  grey_500,
  grey_600,
  grey_700,
  grey_800,
  grey_900,

  primary,
  secondary,
  primaryGradient,

  screen_xs_max,
  screen_sm_min,
  screen_sm_max,
  screen_md_min,
  screen_md_max,
  screen_lg_min,
  screen_lg_max,
  screen_xl_min,

  blackTransparent,
  whiteTransparent,
}
