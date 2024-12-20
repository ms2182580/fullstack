import { ALL_ROUTES_INTERNAL } from "@/utils/ALL_ROUTES"
import {
  useFormattingRoute,
  UseFormattingRouteType,
} from "@/utils/useFormattingRoute"
import Head from "next/head"
import { useRouter as useNavigation } from "next/navigation"
import { useRouter } from "next/router"
import { useMemo } from "react"
import { LayoutAuth } from "./layout-auth"
import { LayoutDashboardGeneral } from "./layout-dashboard-general"
import { Layout_TeamWrapper } from "./styles/layout-team-wrapper"

const allRoutesAccepted: Pick<
  UseFormattingRouteType,
  "acceptedRoutes"
>["acceptedRoutes"] = [
  ...Object.keys(ALL_ROUTES_INTERNAL.AUTHENTICATION),
  ALL_ROUTES_INTERNAL.TEAMS,
]

export const Layout_Team = ({ children, title }) => {
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
    const theRouteFormatted = actualRoute?.toLowerCase()

    if (theRouteFormatted === ALL_ROUTES_INTERNAL.TEAMS) {
      return <LayoutDashboardGeneral>{children}</LayoutDashboardGeneral>
    }

    return <LayoutAuth actualRoute={actualRoute}>{children}</LayoutAuth>
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

      <Layout_TeamWrapper>{layoutPlusChildren}</Layout_TeamWrapper>
    </>
  )
}
