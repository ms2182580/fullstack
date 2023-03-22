import { Fragment } from "react"
import { P } from "../../../../ui/heading_body_text/DesktopMobileFonts"
import { H4 } from "../../../../ui/heading_body_text/HeaderFonts"
import {
  STDetail_CardWrapper_SecondRow_InfoLeftWrapper,
  STDetail_CardWrapper_SecondRow_InfoRightWrapper
} from "../../styles/TherapistInfoThirdPageWrapper.js"

export const STDetail_CardWrapper_SecondRow_Info = ({
  title,
  dataToShow,
  rightRowQualification = false,
  rightRowQualification_Data = [],
  state = "",
  rightRowCredentials = false
}) => {
  
  
  if (rightRowQualification) {
    return (
      <STDetail_CardWrapper_SecondRow_InfoRightWrapper isFirst>
        <H4 cta>{title}:</H4>
        <P>Education level: Master&apos;s</P>
        <P>Years in practice: {rightRowQualification_Data}</P>
        <P>License Number: 1239082</P>
        <P>State of licence: {state}</P>
      </STDetail_CardWrapper_SecondRow_InfoRightWrapper>
    )
  }

  if (rightRowCredentials) {
    return (
      <STDetail_CardWrapper_SecondRow_InfoRightWrapper>
        <H4 cta>{title}:</H4>
        <P>{dataToShow[0]} <br/>{dataToShow[1]}
        </P>
      </STDetail_CardWrapper_SecondRow_InfoRightWrapper>
    )
  }

  return (
    <STDetail_CardWrapper_SecondRow_InfoLeftWrapper>
      <P bold primary_cta>
        {title}:
      </P>
      {Array.isArray(dataToShow) &&
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
              <P> {x},</P>
            </Fragment>
          )
        })}

      {typeof dataToShow === "string" && <P> {dataToShow}</P>}
    </STDetail_CardWrapper_SecondRow_InfoLeftWrapper>
  )
}
