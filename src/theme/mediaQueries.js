const mediaQueries = {
  small: "768",
  medium: "1024",
  large: "1216"
}

const device = Object.keys(mediaQueries).reduce((acc, val) => {
  acc[val] = args => `@media (min-width: ${mediaQueries[val]}px) {
      ${args}
  }`
  return acc
}, {})

export default device
