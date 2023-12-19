import { useRouter } from "next/router"

export const allRoutes = { results: "results", detail: "detail" }

export const useCheckSlug_ORG = () => {
  const { asPath } = useRouter()
  const whichRouteKey = asPath.split("/")[2]

  const isValidRoute = allRoutes[whichRouteKey] ?? null

  return { isValidRoute }
}
