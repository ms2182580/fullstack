import { Fragment, useState } from "react"
import { StartEmptySvg, StartFullSvg } from "../../../../assets/Icons"
import { ORG_ST_Review_Months } from "../../../../utils/ORG_ST_Review_D"
import { P } from "../../../ui/heading_body_text/DesktopMobileFonts"
import { STDetail_Reviews_IndividualComponentWrapper } from "./styles/STDetail_Reviews_IndividualComponentWrapper"

export const STDetail_Reviews_IndividualComponent = ({ rating = 5, review, userName, isModal = false }) => {
  const [month, setMonth] = useState(ORG_ST_Review_Months())

  let howMuchStars
  if (typeof review === "string") {
    howMuchStars = Array(5).fill("fully")
  } else {
    rating = 3
    howMuchStars = Array(5)
      .fill(0)
      .map((x, i) => {
        if (rating - 1 < i) {
          return "empty"
        }
        return "fully"
      })
  }

  return (
    <STDetail_Reviews_IndividualComponentWrapper isModal={isModal}>
      {isModal === false ? (
        <div className="STDetail_Reviews_IndividualComponent_noModal">
          <div>
            {howMuchStars.map((x, i) => {
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

          {typeof review === "string" ? <P>"{review}."</P> : <P>"{review.review}."</P>}

          <div>
            <P bold>-{userName}</P>
            <P>{month} 2022</P>
          </div>
        </div>
      ) : (
        <div className="STDetail_Reviews_IndividualComponent_Modal">
          <div>
            {howMuchStars.map((x, i) => {
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

          <div>
            <P bold>{userName}</P>
            <P>{month} 2022</P>
          </div>

          {typeof review === "string" ? <P>"{review}."</P> : <P>"{review.review}."</P>}
        </div>
      )}
    </STDetail_Reviews_IndividualComponentWrapper>
  )
}
