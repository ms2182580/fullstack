import { Fragment } from "react"
import { QuestionTooltip_STSvg, StartEmptySvg, StartFullSvg } from "../../../assets/Icons"
import { Caption, P } from "../../ui/heading_body_text/DesktopMobileFonts"
import { H3, H4 } from "../../ui/heading_body_text/HeaderFonts"
import { FriendlyDiagnosesWrapper } from "./styles/FriendlyDiagnosesWrapper"
import { StarsRatingWrapper } from "./styles/StarsRatingWrapper.js"

export const Tooltip = ({ isMobile, isThirdPage = false }) => {
  return (
    <div>
      {isMobile === undefined ? (
        <P>Speech Language Pathologist, CCC-SLP</P>
      ) : (
        <span>
          <Caption>Speech Language Pathologist,</Caption>

          <Caption> CCC-SLP</Caption>
        </span>
      )}

      <span>
        <QuestionTooltip_STSvg />
        <span>
          {isThirdPage === false ? (
            <>
              <H4>
                <span>CCC-SLP</span>
              </H4>
            </>
          ) : (
            <>
              <H3>CCC-SLP</H3>
            </>
          )}

          {isThirdPage === false ? (
            <>
              <P>Certificate of Clinical Competence in Speech Language pathology</P>
              <P>- Nationally recognized professional from the American Speech-</P>
              <P>Language-Hearing Association (ASHA).</P>
            </>
          ) : (
              <>
                <P>Certificate of Clinical</P>
                <P>Competence in Speech</P>
                <P>Language pathology -</P>
                <P>Nationally recognized</P>
                <P>professional from the</P>
                <P>American Speech-Language-</P>
                <P>Hearing Association (ASHA).</P>
              </>
          )}
        </span>
      </span>
    </div>
  )
}

export const StarsRatingAndReview = ({ rating, reviews, isMobile = false }) => {
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
      {isMobile === false ? (
        <>
          <P>{rating}.0</P>
          <P dark_gray>({reviews} reviews)</P>
        </>
      ) : (
        <>
          <Caption>{rating}.0</Caption>
          <Caption dark_gray>({reviews} reviews)</Caption>
        </>
      )}
    </StarsRatingWrapper>
  )
}

export const FriendlyDiagnoses = ({ diagnoses, isMobile = false }) => {
  return (
    <FriendlyDiagnosesWrapper isMobile={isMobile}>
      {diagnoses.map((x) => (
        <div key={x}>
          {isMobile === false ? (
            <>
              <P>{x}</P>{" "}
            </>
          ) : (
            <>
              <Caption>{x}</Caption>{" "}
            </>
          )}
        </div>
      ))}
    </FriendlyDiagnosesWrapper>
  )
}
