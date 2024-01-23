import { useRouter } from "next/router"
import { ALL_ROUTES } from "../ALL_ROUTES"

export const useCheckSlug_ORG = () => {
  const { asPath } = useRouter()
  const whichRouteKey = asPath.split("/")[2]

  const isValidRoute = ALL_ROUTES[whichRouteKey] ?? null

  return { isValidRoute }
}
