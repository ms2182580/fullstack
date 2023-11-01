import { useState } from "react"
import { ORG_D_Detail_SearchReviewModalSVG } from "../../../../../assets/Icons/index.js"
import { ORG_ST_Review } from "../../../../../utils/ORG_ST_Review_D.js"
import { ORG_D_Detail_Reviews_IndividualComponent } from "./ORG_D_Detail_Reviews_IndividualComponent"
import { ORG_D_Detail_Review_Modal_DetailReviewsWrapper } from "./styles/ORG_D_Detail_Review_Modal_DetailReviewsWrapper.js"

export const ORG_D_Detail_Review_Modal_DetailReviews = ({ name, lastName }) => {
  const [getReviews, setGetReviews] = useState(ORG_ST_Review(name, lastName, 15))

  return (
    <ORG_D_Detail_Review_Modal_DetailReviewsWrapper>
      <div>
        <ORG_D_Detail_SearchReviewModalSVG />
        <input
          type="text"
          placeholder="Search reviews"
        />
      </div>

      <ORG_D_Detail_Reviews_IndividualComponent getReviews={getReviews} />
    </ORG_D_Detail_Review_Modal_DetailReviewsWrapper>
  )
}
