import { Fragment, useState } from "react"
import { StartEmptySvg, StartFullSvg } from "../../../assets/Icons"
import { ORG_ST_Review_Months } from "../../../utils/ORG_ST_Review"
import { P } from "../../ui/heading_body_text/DesktopMobileFonts"
import { ReviewIndividualComponentWrapper } from "./styles/STDetail_ReviewsWrapper"


export const ReviewIndividualComponent = ({ rating = 5, review, userName }) => {
  
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
    <ReviewIndividualComponentWrapper>
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

      {typeof review === "string" ? <P>{review}.</P> : <P>{review.review}.</P>}

      
      <div>
        <P bold>-{userName}</P>
        <P>{month} 2022</P>
      </div>
      
      
      
    </ReviewIndividualComponentWrapper>
  )
}
