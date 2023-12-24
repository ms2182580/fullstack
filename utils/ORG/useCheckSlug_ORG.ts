import { useRouter } from "next/router"

export const ALL_ROUTES = { ORG: "org", RESULTS: "results", DETAIL: "detail", WELCOME: "welcome" }

export const useCheckSlug_ORG = () => {
  const { asPath } = useRouter()
  const whichRouteKey = asPath.split("/")[2]

  const isValidRoute = ALL_ROUTES[whichRouteKey] ?? null

  return { isValidRoute }
}
