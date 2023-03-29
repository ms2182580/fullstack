import { Fragment } from "react"
import { P } from "../../../ui/heading_body_text/DesktopMobileFonts"
import { ST_CardInfoPaymentWrapper } from "./styles/ST_CardInfoPaymentWrapper.js"

export const ST_CardInfoPayment = ({
  title,
  dataToShow,
}) => {
  
  // console.log('dataToShow:', dataToShow)

  return (
    <ST_CardInfoPaymentWrapper>
      <div>
        <P
          primary_hover
          bold>
          {title}:
        </P>
      </div>

      <div>
        {Array.isArray(dataToShow)
          ? dataToShow.map((x, i) => {

              if (dataToShow.length - 1 === i) {
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
            })
          : typeof dataToShow === "string" ? (
              <>
                <P> {dataToShow}</P>
              </>
            ) : null}
      </div>

      
    </ST_CardInfoPaymentWrapper>
  )
}
