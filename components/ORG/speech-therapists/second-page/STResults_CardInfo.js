import { Fragment } from "react"
import { Caption, P } from "../../../ui/heading_body_text/DesktopMobileFonts"
import { STResults_CardInfoWrapper } from "./styles/STResults_CardInfoWrapper"

export const STResults_CardInfo = ({ title, dataToShow, isMobile = false, isThirdPage = false, withoutComa = false }) => {
  return (
    <STResults_CardInfoWrapper
      isMobile={isMobile}
      isThirdPage={isThirdPage}>
      {isMobile === false ? (
        <>
          <P bold>{title}:</P>
        </>
      ) : isMobile && isThirdPage ? (
        <>
          <Caption
            primary_hover
            bolder>
            {title}
          </Caption>
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
                  {isThirdPage === false ? (
                    <>
                      <Caption> {x}</Caption>
                    </>
                  ) : (
                    <>
                      <P> {x}</P>
                    </>
                  )}
                </>
              ) : (
                <>
                  {isThirdPage === false ? (
                    <>
                      <Caption> {x},</Caption>
                    </>
                  ) : isThirdPage && withoutComa ? (
                    <>
                      <P> {x}</P>
                    </>
                  ) : (
                    <>
                      <P> {x},</P>
                    </>
                  )}
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
    </STResults_CardInfoWrapper>
  )
}

