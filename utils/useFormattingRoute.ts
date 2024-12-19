export type TypeUseFormattingRoute = {
  routeToCheck: string
  acceptedRoutes: string[]
  isReady: boolean
  push: (e: string) => void
}

export const useFormattingRoute = ({
  routeToCheck,
  acceptedRoutes,
  isReady,
  push,
}: TypeUseFormattingRoute): {
  actualRoute: string
  formatRouteToTitle: string | null
  actualRouteIsValid: boolean
  toTitleText: string | null
} => {
  const routeToCheckFormatted = routeToCheck.split("/")
  const isRepeatedUrl = routeToCheckFormatted[1] === routeToCheckFormatted[2]
  const actualRoute = routeToCheckFormatted.at(-1)?.toUpperCase() || ""
  const formatRouteToTitle = actualRoute?.split("_").join(" ") || null

  const actualRouteIsValid =
    acceptedRoutes.some(
      (x) => x.toLocaleLowerCase() === actualRoute.toLocaleLowerCase()
    ) && isRepeatedUrl === false

  if (isReady && actualRouteIsValid === false) {
    push("/404")
  }

  const toTitleText =
    actualRoute?.toLocaleLowerCase() !== acceptedRoutes[0]
      ? ` - ${formatRouteToTitle}`
      : null

  return {
    actualRoute,
    formatRouteToTitle,
    actualRouteIsValid,
    toTitleText,
  }
}
