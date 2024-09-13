import { SEMANTICS } from "@/assets/Colors"
import SVG_AI_Chat_Active from "@/assets/icons/ai_chat_active.svg"
import SVG_AI_Chat_Default from "@/assets/icons/ai_chat_default.svg"
import SVG_Arrow from "@/assets/icons/arrow_up.svg"
import SVG_Documents_Active from "@/assets/icons/documents_active.svg"
import SVG_Documents_Default from "@/assets/icons/documents_default.svg"
import SVG_Home_Default from "@/assets/icons/home_default.svg"
import SVG_Home_Active from "@/assets/icons/home_fill.svg"
import SVG_Magnifying_Glass_Active from "@/assets/icons/magnifying_glass_active.svg"
import SVG_Magnifying_Glass_Default from "@/assets/icons/magnifying_glass_default.svg"
import SVG_Plus from "@/assets/icons/org/third-page/org_plus.svg"
import SVG_Star_Active from "@/assets/icons/star_active.svg"
import SVG_Star_Default from "@/assets/icons/star_default.svg"
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
  { default: SVG_Home_Default, active: SVG_Home_Active },
  { default: SVG_Documents_Default, active: SVG_Documents_Active },
  { default: SVG_AI_Chat_Default, active: SVG_AI_Chat_Active },
  {
    default: SVG_Magnifying_Glass_Default,
    active: SVG_Magnifying_Glass_Active,
  },
  { default: SVG_Star_Default, active: SVG_Star_Active },
]

const formattedRoutes = allRoutesAcceptedToURL.map((x, index) => {
  const formattedURLBecauseDashboard =
    x === ALL_ROUTES.DASHBOARD
      ? `/${ALL_ROUTES.DASHBOARD}`
      : `/${ALL_ROUTES.DASHBOARD}/${x}`

  const svgs = {
    default: svgIcons[index].default,
    active: svgIcons[index].active,
  }

  return {
    formattedToUI: x.replaceAll("_", " "),
    formattedToURL: formattedURLBecauseDashboard,
    svgDefault: svgs.default,
    svgActive: svgs.active,
  }
})

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
        <SVG_Plus /> Create new
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
        Support us <SVG_Arrow />
      </p>
    </Layout_Dashboard_General_AsideWrapper>
  )
}
