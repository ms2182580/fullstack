import { Fragment } from "react"
import {
  Caption,
  P,
} from "../../../../../../ui/heading_body_text/DesktopMobileFonts"
import { ST_M_Results_CardInfoWrapper } from "./styles/ST_M_Results_CardInfoWrapper.js"

export const ST_M_Results_CardInfo = ({ title, dataToShow }) => {
  return (
    <ST_M_Results_CardInfoWrapper>
      <Caption bold>{title}:</Caption>
      <div>
        {Array.isArray(dataToShow) &&
          dataToShow.map((x, i) => (
            <Fragment key={`${x}${i}`}>
              {dataToShow.length - 1 === i && (
                <>
                  <P> {x}</P>
                </>
              )}
            </Fragment>
          ))}
      </div>

      {typeof dataToShow === "string" && (
        <>
          <Caption>{dataToShow}</Caption>
        </>
      )}
    </ST_M_Results_CardInfoWrapper>
  )
}
