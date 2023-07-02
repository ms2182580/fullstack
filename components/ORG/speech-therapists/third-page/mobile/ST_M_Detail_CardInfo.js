import { Fragment } from "react"
import { Caption, P } from "../../../../ui/heading_body_text/DesktopMobileFonts"
import { ST_M_Detail_CardInfoWrapper } from "./styles/ST_M_Detail_CardInfoWrapper.js"

export const ST_M_Detail_CardInfo = ({
  title,
  dataToShow,
  isThirdPage = false,
  withoutComa = false,
  endWithAnd = false
}) => {
  // const { isMobile } = useWidthWindow1024()

  return (
    <ST_M_Detail_CardInfoWrapper
    // isMobile={isMobile}
    // isThirdPage={isThirdPage}
    >
      <Caption
        primary_hover
        bolder>
        {title}:
      </Caption>

      <div>
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
        {typeof dataToShow === "string" && (
          <>
            <P> {dataToShow}</P>
          </>
        )}
      </div>
    </ST_M_Detail_CardInfoWrapper>
  )
}
