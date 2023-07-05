import { Fragment } from "react"
import { Caption, P } from "../../../../ui/heading_body_text/DesktopMobileFonts"
import { ST_M_Detail_CardInfoWrapper } from "./styles/ST_M_Detail_CardInfoWrapper.js"

export const ST_M_Detail_CardInfo = ({ title, dataToShow }) => {
  return (
    <ST_M_Detail_CardInfoWrapper>
      <Caption
        primary_hover
        bolder>
        {title}:
      </Caption>

      <div>
        {Array.isArray(dataToShow) &&
          dataToShow.map((x, i) => {
            if (dataToShow.length - 1 === i) {
              return (
                <Fragment key={`${x}${i}`}>
                  <>
                    <P> {x}</P>
                  </>
                </Fragment>
              )
            }

            return (
              <Fragment key={`${x}${i}`}>
                <>
                  <P> {x},</P>
                </>
              </Fragment>
            )
          })}
        {typeof dataToShow === "string" && (
          <>
            <P> {dataToShow}</P>
          </>
        )}
      </div>
    </ST_M_Detail_CardInfoWrapper>
  )
}
