import { Breadcrumbs_D } from "@/components/ui/breadcrumbs/desktop/Breadcrumbs_D"
import { InnerNavBar_InnerData_KEYS } from "@/utils/ORG/third-page/InnerNavBar"
import { useCheckBreadcrumbs } from "@/utils/ORG/useCheckBreadcrumbs"
import { useRouter } from "next/router"
import { useMemo } from "react"
import { NavBar_D_WriteAReviewSvg, SearchSVG } from "../../../../../assets/Icons"
import { P } from "../../../../ui/heading_body_text/DesktopMobileFonts"
import { H3 } from "../../../../ui/heading_body_text/HeaderFonts"
import { ORG_D_Detail_HeaderWrapper } from "./styles/ORG_D_Detail_HeaderWrapper"

export const ORG_D_Detail_Header = ({ thirdpageDataORG, arrayInnerNavBar = null, defaultSectionToRender, sectionToRender = null }) => {
  const { pathname, query } = useRouter()
  const { titleFormatted } = useCheckBreadcrumbs(query.title)
  const formattedActualRoute = useMemo(() => {
    return `${thirdpageDataORG.fullName.first} ${thirdpageDataORG.fullName.last}`
  }, [])

  /* 
  This data should move the the previous page website.com/ORG/results/<name_of_subcategory_here>
  let { theURLFormatted } = checkRouteThirdPage(pathname) 
  */

  const theURLFormatted = "#"

  return (
    <ORG_D_Detail_HeaderWrapper>
      <Breadcrumbs_D
        whichDisplay={[
          ["Resource Directory", "ORG"],
          [`${titleFormatted}`, `${theURLFormatted}`],
          [`${formattedActualRoute}`, ""],
        ]}
      />

      <ul>
        {sectionToRender !== null ? (
          <>
            {sectionToRender.map((x, index) => {
              const toJSX = x.toNavbar.jsx ? x.toNavbar.jsx : x.toNavbar.id

              if (x.toNavbar.id !== null) {
                return (
                  <li key={`_${index}`}>
                    <H3>
                      <a href={`#${x.toNavbar.id}`}>{toJSX}</a>
                    </H3>
                  </li>
                )
              }
            })}
          </>
        ) : (
          <>
            <li>
              <H3>
                <a href={`#${defaultSectionToRender[0][InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_DEFAULT_ID_KEY]}`}>About</a>
              </H3>
            </li>

            <li>
              <H3>
                <a href={`#${defaultSectionToRender[1][InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_DEFAULT_ID_KEY]}`}>Contact</a>
              </H3>
            </li>
            <li>
              <H3>
                <a href="#Information">Information</a>
              </H3>
            </li>
            <li>
              <H3>
                <a href={`#${defaultSectionToRender[2][InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_DEFAULT_ID_KEY]}`}>Reviews</a>
              </H3>
            </li>
            <li>
              <H3>
                <a href={`#${defaultSectionToRender[3][InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_DEFAULT_ID_KEY]}`}>FAQs</a>
              </H3>
            </li>
          </>
        )}

        <li tabIndex={0}>
          <div>
            <SearchSVG />
          </div>
        </li>

        <li tabIndex={0}>
          <div>
            {" "}
            <NavBar_D_WriteAReviewSvg />
            <P>Write a review</P>
          </div>
        </li>
      </ul>
    </ORG_D_Detail_HeaderWrapper>
  )
}
