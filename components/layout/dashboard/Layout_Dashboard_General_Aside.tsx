import { SEMANTICS } from "@/assets/Colors"
import AI_Chat_Active from "@/assets/icons/ai_chat_active.svg"
import AI_Chat_Default from "@/assets/icons/ai_chat_default.svg"
import SvgArrow from "@/assets/icons/arrow_up.svg"
import Documents_Active from "@/assets/icons/documents_active.svg"
import Documents_Default from "@/assets/icons/documents_default.svg"
import HomeSvg_Default from "@/assets/icons/home_default.svg"
import HomeSvg_Active from "@/assets/icons/home_fill.svg"
import Magnifying_Glass_Active from "@/assets/icons/magnifying_glass_active.svg"
import Magnifying_Glass_Default from "@/assets/icons/magnifying_glass_default.svg"
import SvgPlus from "@/assets/icons/org/third-page/org_plus.svg"
import Star_Active from "@/assets/icons/star_active.svg"
import Star_Default from "@/assets/icons/star_default.svg"
import { INDEX_Logo } from "@/components/logo/INDEX_Logo"
import { Active_Navigation_Link } from "@/components/ui/active_navigation_link/Active_Navigation_Link"
import { ALL_ROUTES } from "@/utils/ALL_ROUTES"
import Link from "next/link"
import { useRouter } from "next/router"
import { css } from "styled-components"
import { Layout_Dashboard_General_AsideWrapper } from "./styles/Layout_Dashboard_General_AsideWrapper"

const allRoutesAcceptedToURL = Object.values(
  ALL_ROUTES.DASHBOARD_SECTIONS
).slice(0, -1)

const svgIcons = [
  { default: HomeSvg_Default, active: HomeSvg_Active },
  { default: Documents_Default, active: Documents_Active },
  { default: AI_Chat_Default, active: AI_Chat_Active },
  { default: Magnifying_Glass_Default, active: Magnifying_Glass_Active },
  { default: Star_Default, active: Star_Active },
]

const formattedRoutes = allRoutesAcceptedToURL.map((x, index) => {
  const svgs = {
    default: svgIcons[index].default,
    active: svgIcons[index].active,
  }

  return {
    formattedToUI: x.replaceAll("_", " "),
    formattedToURL: `/${ALL_ROUTES.DASHBOARD}/${x}`,
    svgDefault: svgs.default,
    svgActive: svgs.active,
  }
})

/*
const allRoutesAcceptedToUI = allRoutesAcceptedToURL.map((x) =>
  x.replaceAll("_", " ")
)
*/

/* 
  !FH0
  Create the UI of dashboard general: aside
   */
// console.log("dashboardRoutesFormatted:", dashboardRoutesFormatted)

const stylesForActive = () => css`
  background-color: ${SEMANTICS.NAVIGATION_ACTIVE};
`

export const Layout_Dashboard_General_Aside = () => {
  const { asPath } = useRouter()

  return (
    <Layout_Dashboard_General_AsideWrapper>
      <INDEX_Logo />

      <Link
        href={`/${ALL_ROUTES.DASHBOARD}/${ALL_ROUTES.DASHBOARD_SECTIONS.CARE_PLAN}`}
      >
        <SvgPlus /> Create new
      </Link>

      <ul>
        {formattedRoutes.map(
          ({ formattedToUI, formattedToURL, svgDefault, svgActive }) => {
            const isActive = asPath === formattedToURL
            const SVGToUI = isActive ? svgActive : svgDefault

            return (
              <Active_Navigation_Link
                key={formattedToURL}
                toURL={formattedToURL}
                isActive={isActive}
                stylesForActive={stylesForActive}
              >
                <SVGToUI /> {formattedToUI}
              </Active_Navigation_Link>
            )
          }
        )}
      </ul>
      <p>
        Support us <SvgArrow />
      </p>
    </Layout_Dashboard_General_AsideWrapper>
  )
}
