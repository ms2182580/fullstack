import { useState } from "react"
import { ORG_ST_Review_Months } from "../../../../../../../../utils/ORG_ST_Review_D.js"
import { P } from "../../../../../../../ui/heading_body_text/DesktopMobileFonts.js"
import { PatternStars } from "../../../../../../stars-rating-review/PatternsStars.js"
import { CC_D_Detail_Reviews_IndividualComponentWrapper } from './styles/CC_D_Detail_Reviews_IndividualComponentWrapper.js'

export const CC_D_Detail_Reviews_IndividualComponent = ({ rating = 5, review, userName }) => {
  const [month, setMonth] = useState(ORG_ST_Review_Months())

  return (
    <CC_D_Detail_Reviews_IndividualComponentWrapper>
      <PatternStars rating={typeof review === "string" ? rating : review.stars} />

      {typeof review === "string" ? <P>"{review}."</P> : <P>"{review.review}."</P>}

      <div>
        <P bold>-{userName}</P>
        <P>{month} 2022</P>
      </div>
    </CC_D_Detail_Reviews_IndividualComponentWrapper>
  )
}
