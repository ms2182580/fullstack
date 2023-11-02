import Link from "next/link.js"
import { useRouter } from "next/router.js"
import { Fragment } from "react"
import { ArrowRightSvg, HomeSvg } from "../../../../assets/Icons/index.js"
import { useShouldTab } from "../../../../utils/ORG_shouldTab.js"
import { useTabIndex } from "../../../../utils/useTabindex.js"
import { P } from "../../heading_body_text/DesktopMobileFonts.js"
import { Breadcrumbs_DWrapper } from "./styles/Breadcrumbs_DWrapper.js"

export const Breadcrumbs_D = ({ whichDisplay = [] }) => {
  const shouldTab = useShouldTab()

  const useTab = useTabIndex()

  const { push } = useRouter()

  let moveUserTo = (e, href) => {
    if (e.key === "Enter") {
      push(href)
    }
  }

  return (
    <Breadcrumbs_DWrapper>
      <Link href="/">
        <span
          onKeyDown={(e) => moveUserTo(e, "/")}
          tabIndex={useTab}>
          <HomeSvg />
          <P>Home</P>
        </span>
      </Link>

      {whichDisplay.map((x) => {
        let defaultRoute = x[1] === "" ? "" : "/" + x[1]

        if (defaultRoute === "") {
          return (
            <Fragment key={x[0]}>
              <ArrowRightSvg />

              <Link href="#">
                <P
                  tabIndex={useTab}
                  onKeyDown={(e) => moveUserTo(e, "#")}>
                  {x[0]}
                </P>
              </Link>
            </Fragment>
          )
        }

        if (defaultRoute !== "") {
          return (
            <Fragment key={x[0]}>
              <ArrowRightSvg />

              <Link href={defaultRoute}>
                <P
                  onKeyDown={(e) => moveUserTo(e, defaultRoute)}
                  tabIndex={useTab}>
                  {x[0]}
                </P>
              </Link>
            </Fragment>
          )
        }
      })}
    </Breadcrumbs_DWrapper>
  )
}
