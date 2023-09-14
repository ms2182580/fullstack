import { ORG_D_Detail_Card_SecondRow_InfoWrapper } from './styles/ORG_D_Detail_Card_SecondRow_InfoWrapper.js'

import { Fragment, useState } from "react"
import { P } from "../../../../ui/heading_body_text/DesktopMobileFonts"
import { H4 } from "../../../../ui/heading_body_text/HeaderFonts"

export const ORG_D_Detail_Card_SecondRow_Info = ({ title, dataToShow, withBackground = false }) => {
  const [howToRender, setHowToRender] = useState(Array.isArray(dataToShow) ? "array" : typeof dataToShow === "string" ? "string" : "notArrayNotString")

  return (
    <ORG_D_Detail_Card_SecondRow_InfoWrapper className={withBackground && "withBackground"}>
      <H4 hover>{title}:</H4>

      {howToRender === "array" ? (
        <>
          {dataToShow.map((x, i) => {
            if (dataToShow.length - 1 === i) {
              return (
                <Fragment key={x}>
                  <P> {x}</P>
                </Fragment>
              )
            }

            return (
              <Fragment key={x}>
                <P> {x}</P>
              </Fragment>
            )
          })}
        </>
      ) : howToRender === "string" ? (
        <>
          <P> {dataToShow}</P>
        </>
      ) : (
        <>
          <P>❌{howToRender}❌</P>
        </>
      )}

      {/* {Array.isArray(dataToShow) &&
        dataToShow.map((x, i) => {
          if (dataToShow.length - 1 === i) {
            return (
              <Fragment key={x}>
                <P> {x}</P>
              </Fragment>
            )
          }

          return (
            <Fragment key={x}>
              <P> {x}</P>
            </Fragment>
          )
        })} */}

      {/* {typeof dataToShow === "string" && <P> {dataToShow}</P>} */}
    </ORG_D_Detail_Card_SecondRow_InfoWrapper>
  )
}
