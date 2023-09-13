export const checkRouteThirdPage = (theURL) => {
  let lastIndex = theURL.lastIndexOf("/")
  let theURLFormatted = theURL.slice(1, lastIndex)
  return theURLFormatted
}
