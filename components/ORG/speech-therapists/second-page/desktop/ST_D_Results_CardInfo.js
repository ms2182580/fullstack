import { Fragment } from "react"
import { P } from "../../../../ui/heading_body_text/DesktopMobileFonts"
import { ST_D_Results_CardInfoWrapper } from "./styles/ST_D_Results_CardInfoWrapper"

export const ST_D_Results_CardInfo = ({
  title,
  dataToShow,
  isThirdPage = false,
  withoutComa = false,
  endWithAnd = false
}) => {
  // const { isMobile } = useWidthWindow1024()

  return (
    <ST_D_Results_CardInfoWrapper
      // isMobile={isMobile}
      isThirdPage={isThirdPage}>
      <P
        primary_hover
        bold>
        {title}:
      </P>

      {Array.isArray(dataToShow) &&
        dataToShow.map((x, i) => {
          if (dataToShow.length - 1 === i && endWithAnd === false) {
            return (
              <Fragment key={`${x}${i}`}>
                <>
                  <P> {x}</P>
                </>
              </Fragment>
            )
          }

          if (dataToShow.length - 1 === i && endWithAnd === true && dataToShow.length > 1) {
            return (
              <Fragment key={`${x}${i}`}>
                <>
                  <P> and {x}</P>
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

      {/* {isMobile === false ? (
        <>
          <P
            primary_hover
            bold>
            {title}:
          </P>
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
      )} */}

      {/* {Array.isArray(dataToShow) &&
        isMobile === false &&
        dataToShow.map((x, i) => {
          if (dataToShow.length - 1 === i && endWithAnd === false) {
            return (
              <Fragment key={`${x}${i}`}>
                <>
                  <P> {x}</P>
                </>
              </Fragment>
            )
          }

          if (dataToShow.length - 1 === i && endWithAnd === true && dataToShow.length > 1) {
            return (
              <Fragment key={`${x}${i}`}>
                <>
                  <P> and {x}</P>
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
        })} */}

      {/* <div>
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
      </div> */}

      {typeof dataToShow === "string" && (
        <>
          <P> {dataToShow}</P>
        </>
      )}

      {/* {typeof dataToShow === "string" && isMobile === false ? (
        <>
          <P> {dataToShow}</P>
        </>
      ) : typeof dataToShow === "string" && isMobile ? (
        <>
          <Caption>{dataToShow}</Caption>
        </>
      ) : null} */}
    </ST_D_Results_CardInfoWrapper>
  )
}
