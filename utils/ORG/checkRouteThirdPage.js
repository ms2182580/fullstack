export const checkRouteThirdPage = (theURL) => {
  let lastIndex = theURL.lastIndexOf("/")
  let theURLFormatted = theURL.slice(0, lastIndex)
  return theURLFormatted
}
