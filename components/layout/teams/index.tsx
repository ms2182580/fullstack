import { ALL_ROUTES_INTERNAL } from "@/utils/ALL_ROUTES"
import {
  useFormattingRoute,
  UseFormattingRouteType,
} from "@/utils/use-formatting-route"
import Head from "next/head"
import { useRouter as useNavigation } from "next/navigation"
import { useRouter } from "next/router"
import { useMemo } from "react"
import { whichLayoutDisplayKey } from "../index"
import { LayoutAuth } from "./layout-auth"
import { INDEX_LayoutDashboardGeneral } from "./layout-dashboard-general"
import { Layout_TeamsWrapper } from "./styles/layout-teams-wrapper"

const allRoutesAccepted: Pick<
  UseFormattingRouteType,
  "acceptedRoutes"
>["acceptedRoutes"] = [
  ...Object.keys(ALL_ROUTES_INTERNAL.AUTHENTICATION_SECTIONS),
  ...Object.keys(ALL_ROUTES_INTERNAL.DASHBOARD_SECTIONS),
  ...Object.keys(ALL_ROUTES_INTERNAL.NEW_SEARCH_SECTIONS),
  ...Object.keys(ALL_ROUTES_INTERNAL.RESOURCES_SECTION),
  ALL_ROUTES_INTERNAL.TEAMS,
  ALL_ROUTES_INTERNAL.AUTHENTICATION,
  ALL_ROUTES_INTERNAL.NEW_SEARCH,
]

export const Layout_Teams = ({ children, title, theRoot }) => {
  const { asPath, isReady } = useRouter()
  const { push } = useNavigation()

  const { actualRoute, formatRouteToTitle, actualRouteIsValid, toTitleText } =
    useFormattingRoute({
      acceptedRoutes: allRoutesAccepted,
      routeToCheck: asPath,
      isReady,
      push,
    })

  const layoutPlusChildren = useMemo(() => {
    if (theRoot === whichLayoutDisplayKey.isTeamsAuth) {
      return <LayoutAuth actualRoute={actualRoute}>{children}</LayoutAuth>
    }

    if (
      theRoot === whichLayoutDisplayKey.isTeamsDashboard ||
      theRoot === whichLayoutDisplayKey.isTeamsNewSearch
    ) {
      return (
        <INDEX_LayoutDashboardGeneral>{children}</INDEX_LayoutDashboardGeneral>
      )
    }

    return null
  }, [asPath])

  if (formatRouteToTitle === null || actualRouteIsValid === false) return null

  return (
    <>
      <Head>
        <title>
          {title} Teams {toTitleText}
        </title>
        <meta name="description" content="inclusive - website" />
      </Head>

      <Layout_TeamsWrapper>{layoutPlusChildren}</Layout_TeamsWrapper>
    </>
  )
}
