import { Fragment } from "react"
import { P } from "../../../../ui/heading_body_text/DesktopMobileFonts"
import { H4 } from "../../../../ui/heading_body_text/HeaderFonts"

export const ORG_D_Detail_CardWrapper_SecondRow_Info = ({
  title,
  dataToShow,
  rightRowQualification = false,
  rightRowQualification_Data = [],
  state = "",
  rightRowCredentials = false
}) => {
  // if (rightRowQualification) {
  //   return (
  //     <div isFirst>
  //       <H4 hover>{title}:</H4>
  //       <P>
  //         <span>Years in practice:</span> {rightRowQualification_Data}
  //       </P>
  //       <P>
  //         <span>License Number:</span> 1239082
  //       </P>
  //       <P>
  //         <span>State of licence:</span> {state}
  //       </P>
  //     </div>
  //   )
  // }

  if (rightRowCredentials) {
    return (
      <div>
        <H4 hover>{title}:</H4>
        <P>
          {dataToShow[0]} <br />
          {dataToShow[1]}
        </P>
      </div>
    )
  }

  return (
    <div>
      <H4 hover>{title}:</H4>
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
    </div>
  )
}
