import { PatternStars } from "@/components/ORG/stars-rating-review/PatternsStars.js"
import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts.js"
import { ORG_ReviewsUsersName } from "@/utils/ORG_ReviewsUsersName.js"
import { ORG_ST_Review_Months } from "@/utils/ORG_ST_Review_D.js"
import { useMemo } from "react"
import { ORG_D_Detail_Reviews_IndividualComponentWrapper } from "./styles/ORG_D_Detail_Reviews_IndividualComponentWrapper.js"

export const ORG_D_Detail_Reviews_IndividualComponent = ({ getReviews, isModal = false }) => {
  const allUserNames = useMemo(() => ORG_ReviewsUsersName(getReviews.length), [])

  const theDate = useMemo(() => ORG_ST_Review_Months(), [])

  return (
    <ORG_D_Detail_Reviews_IndividualComponentWrapper isModal={isModal}>
      {getReviews.map((xReview, index) => {
        return (
          <div key={`${xReview}_${allUserNames[index]}`}>
            <PatternStars rating={typeof xReview === "string" ? 5 : xReview.stars} />

            {typeof xReview === "string" ? <P>"{xReview}."</P> : <P>"{xReview.review}."</P>}

            <div>
              <P bold>-{allUserNames[index]}</P>
              <P>{theDate} 2022</P>
            </div>
          </div>
        )
      })}
    </ORG_D_Detail_Reviews_IndividualComponentWrapper>
  )
}
