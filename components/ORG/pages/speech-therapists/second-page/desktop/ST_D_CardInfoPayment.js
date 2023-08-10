import { Fragment } from "react"
import { P } from "../../../../../ui/heading_body_text/DesktopMobileFonts.js"
import { ST_D_CardInfoPaymentWrapper } from "./styles/ST_D_CardInfoPaymentWrapper.js"

export const ST_D_CardInfoPayment = ({
  title,
  dataToShow,
}) => {
  return (
    <ST_D_CardInfoPaymentWrapper>
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


    </ST_D_CardInfoPaymentWrapper>
  )
}
