export type UseFormattingRouteType = {
  routeToCheck: string
  acceptedRoutes: string[]
  isReady: boolean
  push: (e: string) => void
}

export type UseFormattingRouteReturn = {
  actualRoute: string
  formatRouteToTitle: string | null
  actualRouteIsValid: boolean
  toTitleText: string | null
}

export const useFormattingRoute = ({
  routeToCheck,
  acceptedRoutes,
  isReady,
  push,
}: UseFormattingRouteType): UseFormattingRouteReturn => {
  const routeToCheckFormatted = routeToCheck.split("/")
  const isRepeatedUrl =
    routeToCheckFormatted.at(-1) === routeToCheckFormatted.at(-2)
  const actualRoute = routeToCheckFormatted.at(-1)?.toUpperCase() || ""
  const actualRouteHaveHash = actualRoute.split("#")
  const actualRouteFormatted = {
    routeToCheck: actualRouteHaveHash[0],
    routeWithHash:
      actualRouteHaveHash.length > 1 ? actualRouteHaveHash[1] : null,
  }

  const formatRouteToTitle =
    actualRouteFormatted.routeToCheck?.split("_").join(" ") || null

  const actualRouteIsValid =
    acceptedRoutes.some((x) => {
      const foundedRoute =
        x.toLocaleLowerCase() ===
        actualRouteFormatted.routeToCheck.toLocaleLowerCase()

      return (
        foundedRoute || (foundedRoute && actualRouteFormatted.routeWithHash)
      )
    }) && isRepeatedUrl === false

  if (isReady && actualRouteIsValid === false) {
    push("/404")
  }

  const toTitleText =
    actualRouteFormatted.routeToCheck?.toLocaleLowerCase() !== acceptedRoutes[0]
      ? ` - ${formatRouteToTitle}`
      : null

  return {
    actualRoute: actualRouteFormatted.routeToCheck,
    formatRouteToTitle,
    actualRouteIsValid,
    toTitleText,
  }
}
