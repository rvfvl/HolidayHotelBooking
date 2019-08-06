import theme from "theme/theme"

const device = Object.keys(theme.breakpoints).reduce((acc, val) => {
  acc[val] = `(min-width: ${theme.breakpoints[val]})`
  return acc
}, {})

export default device
