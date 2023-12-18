import { useRouter } from "next/router"

const allRoutes = { search: "search", detail: "detail" }

export const useCheckSlug = () => {
  const { asPath } = useRouter()
  const whichRouteKey = asPath.split("/")[2]

  const whichRouteValue = allRoutes[whichRouteKey]

  return { whichRouteValue }
}
