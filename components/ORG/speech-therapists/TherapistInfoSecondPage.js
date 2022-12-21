import { Fragment } from "react"
import { P } from "../../ui/heading_body_text/DesktopMobileFonts"
import {TherapistInfoSecondPageWrapper} from "./styles/TherapistInfoSecondPageWrapper.js"

const TherapistInfoSecondPage = ({ title, dataToShow }) => {
  return (
    <TherapistInfoSecondPageWrapper>
      
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
      
      
    </TherapistInfoSecondPageWrapper>
  )
}

export default TherapistInfoSecondPage
