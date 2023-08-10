import { Fragment, useState } from "react"
import { ST_D_Detail_SearchReviewModalSVG } from "../../../../../../assets/Icons/index.js"
import { ORG_ReviewsUsersName } from "../../../../../../utils/ORG_ReviewsUsersName.js"
import { ORG_ST_Review } from "../../../../../../utils/ORG_ST_Review_D.js"
import { ST_D_Detail_Reviews_IndividualComponent } from "./ST_D_Detail_Reviews_IndividualComponent.js"
import { ST_D_Detail_Review_Modal_DetailReviewsWrapper } from "./styles/ST_D_Detail_Review_Modal_DetailReviewsWrapper.js"

export const ST_D_Detail_Review_Modal_DetailReviews = ({ name, lastName }) => {
  const [getReviews, setGetReviews] = useState(ORG_ST_Review(name, lastName, 15))
  const [allUserNames, setAllUserNames] = useState(ORG_ReviewsUsersName(15))

  return (
    <ST_D_Detail_Review_Modal_DetailReviewsWrapper className="STDetail_Review_Modal_DetailReviewsWrapper">
      <div>
        <ST_D_Detail_SearchReviewModalSVG />
        <input type="text" placeholder="Search reviews" />
      </div>

      {getReviews.map((x, i) => (
        <Fragment key={`${x}_${i}`}>
          <ST_D_Detail_Reviews_IndividualComponent
            review={x}
            userName={allUserNames[i]}
            isModal={true}
          />
        </Fragment>
      ))}
    </ST_D_Detail_Review_Modal_DetailReviewsWrapper>
  )
}
