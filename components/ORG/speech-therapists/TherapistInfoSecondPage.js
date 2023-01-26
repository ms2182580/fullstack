import { Fragment } from "react"
import { Caption, P } from "../../ui/heading_body_text/DesktopMobileFonts"
import { TherapistInfoSecondPageWrapper } from "./styles/TherapistInfoSecondPageWrapper.js"

const TherapistInfoSecondPage = ({ title, dataToShow, isMobile = false }) => {
  return (
    <TherapistInfoSecondPageWrapper isMobile={isMobile}>
      {isMobile === false ? (
        <>
          <P bold>{title}:</P>
        </>
      ) : (
        <>
          <Caption bold>{title}:</Caption>
        </>
      )}

      {Array.isArray(dataToShow) &&
        isMobile === false &&
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

      <div>
        {Array.isArray(dataToShow) &&
          isMobile &&
          dataToShow.map((x, i) => (
            <Fragment key={`${x}${i}`}>
              {dataToShow.length - 1 === i ? (
                <>
                  <Caption> {x}</Caption>
                </>
              ) : (
                <>
                  <Caption> {x},</Caption>
                </>
              )}
            </Fragment>
          ))}
      </div>

      {typeof dataToShow === "string" && isMobile === false ? (
        <>
          <P> {dataToShow}</P>
        </>
      ) : typeof dataToShow === "string" && isMobile ? (
        <>
          <Caption>{dataToShow}</Caption>
        </>
      ) : null}
    </TherapistInfoSecondPageWrapper>
  )
}

export default TherapistInfoSecondPage
