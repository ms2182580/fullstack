import { Fragment, useState } from "react"
import { Search_STDetail_ModalSVG } from "../../../../../assets/Icons/index.js"
import { ORG_ReviewsUsersName } from "../../../../../utils/ORG_ReviewsUsersName.js"
import { ORG_ST_Review } from "../../../../../utils/ORG_ST_Review.js"
import { STDetail_Reviews_IndividualComponent } from "../STDetail_Reviews_IndividualComponent.js"
import { STDetail_Review_Modal_DetailReviewsWrapper } from "./styles/STDetail_Review_Modal_DetailReviewsWrapper.js"

export const STDetail_Review_Modal_DetailReviews = ({ name, lastName }) => {
  const [getReviews, setGetReviews] = useState(ORG_ST_Review(name, lastName, 15))
  const [allUserNames, setAllUserNames] = useState(ORG_ReviewsUsersName(15))
  console.log("allUserNames:", allUserNames)
  console.log("getReviews:", getReviews)

  return (
    <STDetail_Review_Modal_DetailReviewsWrapper className="STDetail_Review_Modal_DetailReviewsWrapper">
      <div>
        <Search_STDetail_ModalSVG />
        <input type="text" placeholder="Search reviews" />
      </div>

      {getReviews.map((x, i) => (
        <Fragment key={`${x}_${i}`}>
          <STDetail_Reviews_IndividualComponent
            review={x}
            userName={allUserNames[i]}
            isModal={true}
          />
        </Fragment>
      ))}
    </STDetail_Review_Modal_DetailReviewsWrapper>
  )
}
