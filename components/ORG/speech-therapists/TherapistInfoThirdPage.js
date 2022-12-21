import { Fragment } from "react"
import { P } from "../../ui/heading_body_text/DesktopMobileFonts"
import { TherapistInfoThirdPageWrapper, TherapistInfoThirdPageWrapper_Left, TherapistInfoThirdPageWrapper_Right } from "./styles/TherapistInfoThirdPageWrapper.js"

export const TherapistInfoThirdPage = ({
  title,
  dataToShow,
  rightRowQualification = false,
  rightRowQualification_Data = [],
  state = "",
  rightRowCredentials = false
}) => {
  if (rightRowQualification) {
    return (
      <TherapistInfoThirdPageWrapper_Right>
        <P bold primary_cta>{title}:</P>
        <P>Education level: Master&apos;s</P>
        <P>Years in practice: {rightRowQualification_Data}</P>
        <P>License Number: 1239082</P>
        <P>State of licence: {state}</P>
      </TherapistInfoThirdPageWrapper_Right>
    )
  }
  
  if (rightRowCredentials) {
    return (
      <TherapistInfoThirdPageWrapper_Right>
        <P bold primary_cta>{title}:</P>
        <P>{dataToShow}</P>
      </TherapistInfoThirdPageWrapper_Right>
    )
  }

  return (
    <TherapistInfoThirdPageWrapper_Left>
      <P bold primary_cta>{title}:</P>
      {Array.isArray(dataToShow) &&
        dataToShow.map((x, i) => {
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
    </TherapistInfoThirdPageWrapper_Left>
  )
}
