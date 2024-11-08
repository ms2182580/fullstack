import { H3, H4 } from "@/components/ui/heading_body_text/HeaderFonts"
import { WhichDefaultId } from "@/utils/org/third-page/InnerNavBar"
// import { useCheckBreadcrumbs } from "@/utils/org/useCheckBreadcrumbs"
import Link from "next/link"
import { useRouter } from "next/router"
// import { useMemo } from "react"
import { ORG_M_Detail_HeaderWrapper } from "./styles/ORG_M_Detail_HeaderWrapper"

enum TabSection {
  about = 1,
  booking = 2,
  reviews = 3,
  faqs = 4,
}
export const ORG_M_Detail_Header = ({
  thirdpageDataORG,
  defaultSectionToRender,
  sectionToRender = null,
}: any) => {
  const { pathname, query, asPath } = useRouter()
  // const { titleFormatted } = useCheckBreadcrumbs(query.title)
  const defaultId = asPath.split("#")[1] || "about"
  // const formattedActualRoute = useMemo(() => {
  //   return `${thirdpageDataORG.fullName.first} ${thirdpageDataORG.fullName.last}`
  // }, [])
  /*  
  This data should move the the previous page website.com/org/results/<name_of_subcategory_here>
  let { theURLFormatted } = checkRouteThirdPage(pathname) 
  */

  const activeSection = TabSection[defaultId]
  let tabs = ["about", "booking", "reviews", "faqs"]
  return (
    <ORG_M_Detail_HeaderWrapper activeIndex={activeSection}>
      {sectionToRender !== null ? (
        sectionToRender.map((x: any, index: number) => {
          const toJSX = x?.toNavbar?.jsx ? x.toNavbar.jsx : x.toNavbar.id
          if (toJSX === "other providers") return
          if (x.toNavbar.id !== null && tabs.includes(toJSX.toLowerCase())) {
            return (
              <li key={`_${index}`}>
                {" "}
                <H4>
                  <Link href={`#${x.toNavbar.id}`}>{toJSX}</Link>
                </H4>
              </li>
            )
          }
        })
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
    </ORG_M_Detail_HeaderWrapper>
  )
}
