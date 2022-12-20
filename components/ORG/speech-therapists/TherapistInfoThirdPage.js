import { Fragment } from "react"
import { P } from "../../ui/heading_body_text/DesktopMobileFonts"
import {TherapistInfoThirdPageWrapper} from "./styles/TherapistInfoThirdPageWrapper.js"

export const TherapistInfoThirdPage = ({ title, dataToShow }) => {
  return (
    <TherapistInfoThirdPageWrapper>
      <P bold>{title}:</P>
      {Array.isArray(dataToShow) &&  dataToShow.map((x, i) => {
        if (dataToShow.length - 1 === i) {
          return (
            <Fragment key={x}>
              <span> {x}</span>
            </Fragment>
          )
        }
        
        return (
          <Fragment key={x}>
            <span> {x},</span>
          </Fragment>
        )
      })}
      
      {typeof dataToShow === "string" && <span> {dataToShow}</span>}
      
      
    </TherapistInfoThirdPageWrapper>
  )
}

