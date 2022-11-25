import { Fragment } from "react"
import {
  QuestionTooltip_STSvg,
  StartEmptySvg,
  StartFullSvg
} from "../../../assets/Icons"
import { P } from "../../ui/heading_body_text/DesktopMobileFonts"
import { H4 } from "../../ui/heading_body_text/HeaderFonts"
import { FriendlyDiagnosesWrapper } from "./styles/FriendlyDiagnosesWrapper"
import { StarsRatingWrapper } from "./styles/StarsRatingWrapper.js"

export const Tooltip = () => {
  return (
    <div>
      <P>Speech Language Pathologist, CCC-SLP</P>
      <span>
        <QuestionTooltip_STSvg />
        <span>
          <H4>
            <span>CCC-SLP</span>
          </H4>
          <P>Certificate of Clinical Competence in Speech Language pathology</P>
          <P>- Nationally recognized professional from the American Speech-</P>
          <P>Language-Hearing Association (ASHA).</P>
        </span>
      </span>
    </div>
  )
}

export const StarsRatingAndReview = ({ rating, reviews }) => {

  let ratingPattern = Array(5)
    .fill(0)
    .map((x, i) => {
      if (rating - 1 < i) {
        return "empty"
      }
      return "fully"
    })

  return (
    <StarsRatingWrapper>
      <div>
        {ratingPattern.map((x, i) => {
          if (x === "fully") {
            return (
              <Fragment key={`${x}${i}`}>
                <StartFullSvg />
              </Fragment>
            )
          } else {
            return (
              <Fragment key={`${x}${i}`}>
                <StartEmptySvg />
              </Fragment>
            )
          }
        })}
      </div>
      <P>{rating}.0</P>
      <P dark_gray>({reviews} reviews)</P>
    </StarsRatingWrapper>
  )
}

export const FriendlyDiagnoses = ({ diagnoses }) => {
  return (
    <FriendlyDiagnosesWrapper>
      {diagnoses.map((x) => (
        <div key={x}><P>{x}</P> </div>
      ))}
    </FriendlyDiagnosesWrapper>
  )
}
