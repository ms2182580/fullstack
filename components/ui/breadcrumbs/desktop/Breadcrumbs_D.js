
import { Fragment } from "react"
import { HomeSvg } from "../../../../assets/Icons/index.js"
import { useShouldTab } from "../../../../utils/ORG_shouldTab.js"
import { P } from "../../heading_body_text/DesktopMobileFonts.js"
import { LinkNoStyle } from "../../hyperlink/HyperlinkNoStyles.js"
import { Breadcrumbs_DWrapper } from "./styles/Breadcrumbs_DWrapper.js"

export const Breadcrumbs_D = ({ whichDisplay }) => {
  const shouldTab = useShouldTab()

  return (
    <Breadcrumbs_DWrapper>
      <HomeSvg />
      <LinkNoStyle
        href="/"
        tabIndex={shouldTab}>
        <P>Home</P>
      </LinkNoStyle>

      {whichDisplay.map((x) => {
        let defaultRoute = x[1] === "" ? "" : "/" + x[1]

        if (defaultRoute === "") {
          return (
            <Fragment key={x[0]}>
              <LinkNoStyle
                href="#"
                tabIndex={shouldTab}>
                <P bolder>/</P>
                <P bold>{x[0]}</P>
              </LinkNoStyle>
            </Fragment>
          )
        } else {
          return (
            <Fragment key={x[0]}>
              <LinkNoStyle
                href={defaultRoute}
                className="isNavigable"
                tabIndex={shouldTab}>
                <P bolder>/</P>
                <P
                  bold
                  className="underline">
                  {x[0]}
                </P>
              </LinkNoStyle>
            </Fragment>
          )
        }
      })}
    </Breadcrumbs_DWrapper>
  )
}
