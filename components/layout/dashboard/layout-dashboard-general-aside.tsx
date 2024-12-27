import SVGArrow from "@/assets/icons/arrow_up.svg"
import SVGPlus from "@/assets/icons/org/third-page/org_plus.svg"
import { INDEX_Logo } from "@/components/logo"
import { ActiveNavigationLink } from "@/components/ui/active_navigation_link"
import { ALL_ROUTES } from "@/utils/ALL_ROUTES"
import { dashboardAsideIcons } from "@/utils/dashboard/aside/icons"
import Link from "next/link"
import { useRouter } from "next/router"
import { LayoutDashboardGeneralAsideWrapper } from "./styles/layout-dashboard-general-aside-wrapper"

const allRoutesAcceptedToURL = Object.values(
  ALL_ROUTES.DASHBOARD_SECTIONS
).slice(0, -1)

const formattedRoutes = allRoutesAcceptedToURL.map((x) => {
  const formattedURLBecauseDashboard =
    x === ALL_ROUTES.DASHBOARD
      ? `/${ALL_ROUTES.DASHBOARD}`
      : `/${ALL_ROUTES.DASHBOARD}/${x}`

  const svgRetrieved =
    typeof dashboardAsideIcons!._get === "function"
      ? dashboardAsideIcons!._get(x)
      : undefined

  return {
    formattedToUI: x.replaceAll("_", " "),
    formattedToURL: formattedURLBecauseDashboard,
    svgDefault: svgRetrieved!.default,
    svgActive: svgRetrieved!.active,
  }
})

export const LayoutDashboardGeneralAside = () => {
  const { asPath } = useRouter()

  return (
    <LayoutDashboardGeneralAsideWrapper>
      <INDEX_Logo />

      <Link
        href={`/${ALL_ROUTES.DASHBOARD}/${ALL_ROUTES.DASHBOARD_SECTIONS.CARE_PLAN}`}
      >
        <SVGPlus /> Create new
      </Link>

      <ul>
        {formattedRoutes.map(
          ({ formattedToUI, formattedToURL, svgDefault, svgActive }) => {
            const isActive = asPath === formattedToURL
            const SVGToUI = isActive ? svgActive : svgDefault

            return (
              <ActiveNavigationLink
                key={formattedToURL}
                toURL={formattedToURL}
                isActive={isActive}
              >
                <SVGToUI />
                <>{formattedToUI}</>
              </ActiveNavigationLink>
            )
          }
        )}
      </ul>
      <p>
        Support us <SVGArrow />
      </p>
    </LayoutDashboardGeneralAsideWrapper>
  )
}
