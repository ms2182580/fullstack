import { Fragment } from "react"
import { Caption } from "../../../../ui/heading_body_text/DesktopMobileFonts.js"
import { ST_M_Results_CardInfoWrapper } from "./styles/ST_M_Results_CardInfoWrapper.js"

export const ST_M_Results_CardInfo = ({
  title,
  dataToShow,
  isThirdPage = false,
  withoutComa = false,
  endWithAnd = false
}) => {
  // const { isMobile } = useWidthWindow1024()

  return (
    <ST_M_Results_CardInfoWrapper isThirdPage={isThirdPage}>
      {/* <P
        primary_hover
        bold>
        {title}:
      </P> */}

      {isThirdPage ? (
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


      <div>
        {Array.isArray(dataToShow) &&
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

      {typeof dataToShow === "string" && (
        <>
          <Caption>{dataToShow}</Caption>
        </>
      )}

    </ST_M_Results_CardInfoWrapper>
  )
}
