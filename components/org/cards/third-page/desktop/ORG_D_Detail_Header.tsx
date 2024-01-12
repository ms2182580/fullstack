import { NavBar_D_WriteAReviewSvg, SearchSVG } from "@/assets/icons"
import { Breadcrumbs_D } from "@/components/ui/breadcrumbs/desktop/Breadcrumbs_D"
import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { H3 } from "@/components/ui/heading_body_text/HeaderFonts"
import { useORG_Ctx_D_ThirdpageData_Backend } from "@/context/ORG_Ctx_D_ThirdpageData_Backend_Provider"
import { DATA_ORG_D_TYPES_KEYS } from "@/utils/org/DATA_ORG_D"
import { DATA_ORG_KeyNamesForCards_D_KEYS } from "@/utils/org/DATA_ORG_KeyNamesForCards_D"
import { WhichDefaultId } from "@/utils/org/third-page/InnerNavBar"
import { useCheckBreadcrumbs } from "@/utils/org/useCheckBreadcrumbs"
import { ALL_ROUTES } from "@/utils/org/useCheckSlug_ORG"
import Link from "next/link"
import { useRouter } from "next/router"
import { useMemo } from "react"
import { ORG_D_Detail_HeaderWrapper } from "./styles/ORG_D_Detail_HeaderWrapper"

export const ORG_D_Detail_Header = ({
  thirdpageDataORG,
  defaultSectionToRender,
  sectionToRender = null,
}: any) => {
  const { query } = useRouter()
  const { titleFormatted } = useCheckBreadcrumbs(query.title)
  const formattedActualRoute = useMemo(() => {
    if (!query[DATA_ORG_D_TYPES_KEYS.IS_FROM_BACKEND]) {
      return `${thirdpageDataORG.fullName.first} ${thirdpageDataORG.fullName.last}`
    }

    return null
  }, [])

  const { thirdpageDataORG: thirdpageDataORG_Backend }: any =
    useORG_Ctx_D_ThirdpageData_Backend()

  /* 
  This data should move the the previous page website.com/org/results/<name_of_subcategory_here>
  let { theURLFormatted } = checkRouteThirdPage(pathname) 
  */

  const theURLFormatted = "/#"

  return (
    <ORG_D_Detail_HeaderWrapper>
      {!query[DATA_ORG_D_TYPES_KEYS.IS_FROM_BACKEND] ? (
        <>
          <Breadcrumbs_D
            whichDisplay={[
              ["Resource Directory", `${ALL_ROUTES.ORG}`],
              [`${titleFormatted}`, `${theURLFormatted}`],
              [`${formattedActualRoute}`, ""],
            ]}
          />
        </>
      ) : (
        <>
          <Breadcrumbs_D
            whichDisplay={[
              ["Resource Directory", `${ALL_ROUTES.ORG}`],
              [
                `${
                  thirdpageDataORG_Backend[
                    DATA_ORG_KeyNamesForCards_D_KEYS.ALL_DATA
                  ].recordSubtype
                }`,
                ``,
              ],
              [
                `${
                  thirdpageDataORG_Backend[
                    DATA_ORG_KeyNamesForCards_D_KEYS.ALL_DATA
                  ].recordName
                }`,
                "",
              ],
            ]}
          />
        </>
      )}

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
