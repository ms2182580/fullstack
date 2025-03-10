import { CtxCreatePlanVisibility_Provider } from "@/context/dashboard/care_plan/ctx-create-plan-visibility"
import { ALL_ROUTES } from "@/utils/ALL_ROUTES"
import { useFormattingRoute } from "@/utils/use-formatting-route"
import Head from "next/head"
import { useRouter as useNavigation } from "next/navigation"
import { useRouter } from "next/router"
import { useMemo } from "react"
import { Layout_Dashboard_CarePlan } from "./Layout_Dashboard_CarePlan"
import { Layout_Dashboard_General } from "./Layout_Dashboard_General"
import { Layout_DashboardWrapper } from "./styles/Layout_DashboardWrapper"

export const Layout_Dashboard = ({ title, children }) => {
  const { asPath, isReady } = useRouter()
  const { push } = useNavigation()

  /* 
  !FH0
  Use this customHook "useFormattingRoute" on the layout of "Layout_Team". Also, take a look on how this Layout "Layout_Dashboard" handle two different layout inside it "Layout_Dashboard_CarePlan" and "Layout_Dashboard_General"
  
  */
  const { actualRoute, formatRouteToTitle, actualRouteIsValid, toTitleText } =
    useFormattingRoute({
      acceptedRoutes: Object.keys(ALL_ROUTES.DASHBOARD_SECTIONS),
      routeToCheck: asPath,
      isReady,
      push,
    })

  const layoutPlusChildren = useMemo(() => {
    const theRouteFormatted = actualRoute?.toLowerCase()
    if (theRouteFormatted === ALL_ROUTES.DASHBOARD_SECTIONS.CARE_PLAN) {
      return <Layout_Dashboard_CarePlan>{children}</Layout_Dashboard_CarePlan>
    }

    return <Layout_Dashboard_General>{children}</Layout_Dashboard_General>
  }, [asPath])

  if (formatRouteToTitle === null || actualRouteIsValid === false) return null

  return (
    <>
      <Head>
        <title>
          {title} Dashboard {toTitleText}
        </title>
        <meta name="description" content="inclusive - website" />
      </Head>

      <CtxCreatePlanVisibility_Provider>
        <Layout_DashboardWrapper>{layoutPlusChildren}</Layout_DashboardWrapper>
      </CtxCreatePlanVisibility_Provider>
    </>
  )
}
