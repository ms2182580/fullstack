import { Fragment } from "react"
import { P } from "../../../../../ui/heading_body_text/DesktopMobileFonts"
import { ST_D_Results_CardInfoWrapper } from "./styles/ST_D_Results_CardInfoWrapper"

export const ST_D_Results_CardInfo = ({ title, dataToShow }) => {
  return (
    <ST_D_Results_CardInfoWrapper>
      <P
        primary_hover
        bold>
        {title}:
      </P>

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
    </ST_D_Results_CardInfoWrapper>
  )
}
