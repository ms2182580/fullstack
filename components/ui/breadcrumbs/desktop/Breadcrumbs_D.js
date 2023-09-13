import { Fragment } from "react"
import { ArrowRightSvg, HomeSvg } from "../../../../assets/Icons/index.js"
import { useShouldTab } from "../../../../utils/ORG_shouldTab.js"
import { P } from "../../heading_body_text/DesktopMobileFonts.js"
import { LinkNoStyle } from "../../hyperlink/HyperlinkNoStyles.js"
import { Breadcrumbs_DWrapper } from "./styles/Breadcrumbs_DWrapper.js"

export const Breadcrumbs_D = ({ whichDisplay = [] }) => {
  const shouldTab = useShouldTab()

  return (
    <Breadcrumbs_DWrapper>
      <LinkNoStyle
        href="/"
        tabIndex={shouldTab}>
        <HomeSvg />
        <P>Home</P>
      </LinkNoStyle>

      {whichDisplay.map((x) => {
        let defaultRoute = x[1] === "" ? "" : "/" + x[1]

        if (defaultRoute === "") {
          return (
            <Fragment key={x[0]}>
              <ArrowRightSvg />

              <LinkNoStyle
                href="#"
                tabIndex={shouldTab}>
                <P>{x[0]}</P>
              </LinkNoStyle>
            </Fragment>
          )
        }

        if (defaultRoute !== "") {
          return (
            <Fragment key={x[0]}>
              <ArrowRightSvg />

              <LinkNoStyle
                href={defaultRoute}
                tabIndex={shouldTab}>
                <P>{x[0]}</P>
              </LinkNoStyle>
            </Fragment>
          )
        }
      })}
    </Breadcrumbs_DWrapper>
  )
}
