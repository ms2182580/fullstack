import { Breadcrumbs_D } from "@/components/ui/breadcrumbs/desktop/Breadcrumbs_D"
import { WhichDefaultId } from "@/utils/org/third-page/InnerNavBar"
import { useCheckBreadcrumbs } from "@/utils/org/useCheckBreadcrumbs"
import { ALL_ROUTES } from "@/utils/org/useCheckSlug_ORG"
import Link from "next/link"
import { useRouter } from "next/router"
import { useMemo } from "react"
import { NavBar_D_WriteAReviewSvg, SearchSVG } from "../../../../../assets/Icons"
import { P } from "../../../../ui/heading_body_text/DesktopMobileFonts"
import { H3 } from "../../../../ui/heading_body_text/HeaderFonts"
import { ORG_D_Detail_HeaderWrapper } from "./styles/ORG_D_Detail_HeaderWrapper"

export const ORG_D_Detail_Header = ({ thirdpageDataORG, defaultSectionToRender, sectionToRender = null }: any) => {
  const { pathname, query } = useRouter()
  const { titleFormatted } = useCheckBreadcrumbs(query.title)
  const formattedActualRoute = useMemo(() => {
    return `${thirdpageDataORG.fullName.first} ${thirdpageDataORG.fullName.last}`
  }, [])

  /* 
  This data should move the the previous page website.com/org/results/<name_of_subcategory_here>
  let { theURLFormatted } = checkRouteThirdPage(pathname) 
  */

  const theURLFormatted = "#"

  return (
    <ORG_D_Detail_HeaderWrapper>
      <Breadcrumbs_D
        whichDisplay={[
          ["Resource Directory", `${ALL_ROUTES.ORG}`],
          [`${titleFormatted}`, `${theURLFormatted}`],
          [`${formattedActualRoute}`, ""],
        ]}
      />

      <ul>
        {sectionToRender !== null ? (
          <>
            {sectionToRender.map((x: any, index: number) => {
              const toJSX = x?.toNavbar?.jsx ? x.toNavbar.jsx : x.toNavbar.id

              if (x.toNavbar.id !== null) {
                return (
                  <li key={`_${index}`}>
                    <H3>
                      <Link href={`#${x.toNavbar.id}`}>{toJSX}</Link>
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
                <Link href={`#${WhichDefaultId.about}`}>About</Link>
              </H3>
            </li>

            {defaultSectionToRender.map((x, index) => {
              const toJSX = x?.toNavbar?.jsx ? x.toNavbar.jsx : x.toNavbar.id

              return (
                <li key={`_${index}`}>
                  <H3>
                    <Link href={`#${x.toNavbar.id}`}>{toJSX}</Link>
                  </H3>
                </li>
              )
            })}
            {/* <>
            <li>
              <H3>
                <Link href={`#${defaultSectionToRender[0][InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_DEFAULT_ID_KEY]}`}>About</Link>
              </H3>
            </li>

            <li>
              <H3>
                <Link href={`#${defaultSectionToRender[1][InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_DEFAULT_ID_KEY]}`}>Contact</Link>
              </H3>
            </li>
            <li>
              <H3>
                <Link href="#Information">Information</Link>
              </H3>
            </li>
            <li>
              <H3>
                <Link href={`#${defaultSectionToRender[2][InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_DEFAULT_ID_KEY]}`}>Reviews</Link>
              </H3>
            </li>
            <li>
              <H3>
                <Link href={`#${defaultSectionToRender[3][InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_DEFAULT_ID_KEY]}`}>FAQs</Link>
              </H3>
            </li>
          </> */}
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
