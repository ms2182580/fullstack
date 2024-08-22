import { useEffect } from "react"

type TypeUseFormattingRoute = {
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
  const actualRoute = routeToCheck?.split("/").at(-1)?.toUpperCase() || ""
  const formatRouteToTitle = actualRoute?.split("_").join(" ") || null

  const actualRouteIsValid = acceptedRoutes.some((x) => x === actualRoute)

  useEffect(() => {
    if (isReady && actualRouteIsValid === false) {
      push("/404")
    }
  }, [isReady])

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
