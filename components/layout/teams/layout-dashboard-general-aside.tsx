import SVGArrow from "@/assets/icons/arrow_up.svg"
import { INDEX_Logo } from "@/components/logo"
import { ActiveNavigationLink } from "@/components/ui/active_navigation_link"
import { ALL_ROUTES_INTERNAL } from "@/utils/ALL_ROUTES"
import { dashboardAsideIcons } from "@/utils/dashboard/aside/icons"
import { useRouter } from "next/router"
import { LayoutDashboardGeneralAsideWrapper } from "./styles/layout-dashboard-general-aside-wrapper"

const allRoutesAcceptedToURL = Object.values(
  ALL_ROUTES_INTERNAL.DASHBOARD_SECTIONS
)

const routesDisabled = {
  [ALL_ROUTES_INTERNAL.DASHBOARD_SECTIONS.WRITE_CONTENT]:
    ALL_ROUTES_INTERNAL.DASHBOARD_SECTIONS.WRITE_CONTENT,
}

const formattedRoutes = allRoutesAcceptedToURL.map((x) => {
  const theRoot = `/${ALL_ROUTES_INTERNAL.TEAMS}/${ALL_ROUTES_INTERNAL.DASHBOARD}`

  const formattedURLBecauseDashboard =
    x === ALL_ROUTES_INTERNAL.DASHBOARD ? theRoot : `${theRoot}/${x}`

  const svgRetrieved =
    typeof dashboardAsideIcons!._get === "function"
      ? dashboardAsideIcons!._get(x)
      : undefined

  const isDisabledRoute = routesDisabled[x] ? true : false

  return {
    formattedToUI: x.replaceAll("_", " "),
    formattedToURL: formattedURLBecauseDashboard,
    svgDefault: svgRetrieved?.default,
    svgActive: svgRetrieved?.active,
    isDisabledRoute,
  }
})

export const LayoutDashboardGeneralAside = () => {
  const { asPath } = useRouter()

  return (
    <LayoutDashboardGeneralAsideWrapper>
      <INDEX_Logo whichOneShouldDisplay="dark-r" />

      <button>New Search</button>

      <ul>
        {formattedRoutes.map(
          ({
            formattedToUI,
            formattedToURL,
            svgDefault,
            svgActive,
            isDisabledRoute,
          }) => {
            const isActive = asPath === formattedToURL
            const SVGToUI = isActive ? svgActive : svgDefault

            return (
              <ActiveNavigationLink
                key={formattedToURL}
                toURL={formattedToURL}
                isDisabledRoute={isDisabledRoute}
                isActive={isActive}
              >
                {SVGToUI && <SVGToUI />}
                <>{formattedToUI}</>
              </ActiveNavigationLink>
            )
          }
        )}
      </ul>

      <p>
        Contact us <SVGArrow />
      </p>
    </LayoutDashboardGeneralAsideWrapper>
  )
}
