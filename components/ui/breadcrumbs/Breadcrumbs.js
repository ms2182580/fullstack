import React from "react"
import { HomeSvg } from "../../../assets/Icons/index.js"
import { P } from "../heading_body_text/DesktopMobileFonts.js"
import { LinkNoStyle } from "../hyperlink/HyperlinkNoStyles.js"
import { BreadcrumbsWrapper } from "./BreadcrumbsStyled.js"

const Breadcrumbs = ({ whichDisplay }) => {
  return (
    <BreadcrumbsWrapper>
      <HomeSvg />
      <LinkNoStyle href="/">
        <P>Home</P>
      </LinkNoStyle>

      {whichDisplay.map((x) => {
        let defaultRoute = x[1] === "" ? "" : "/" + x[1]

        if (defaultRoute === "") {
          return (
            <React.Fragment key={x[0]}>
              <LinkNoStyle href="#">
                <P bolder>/</P>
                <P bold>{x[0]}</P>
              </LinkNoStyle>
            </React.Fragment>
          )
        } else {
          return (
            <React.Fragment key={x[0]}>
              <LinkNoStyle href={defaultRoute} className="isNavigable">
                <P bolder>/</P>
                <P bold className="underline">{x[0]}</P>
              </LinkNoStyle>
            </React.Fragment>
          )
        }
      })}
    </BreadcrumbsWrapper>
  )
}

export default Breadcrumbs
