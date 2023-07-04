import { Fragment, useState } from "react"
import { ORG_ReviewsUsersName } from "../../../../../utils/ORG_ReviewsUsersName"
import { ORG_ST_Review } from "../../../../../utils/ORG_ST_Review_D"
import { Caption, P } from "../../../../ui/heading_body_text/DesktopMobileFonts"
import { ST_M_Detail_Reviews_IndividualComponent } from "./ST_M_Detail_Reviews_IndividualComponent"
import { ST_M_Detail_ReviewsWrapper } from "./styles/ST_M_Detail_ReviewsWrapper"

export const ST_M_Detail_Reviews = ({ name, lastName, theRef, scrollMarginTopState }) => {
  const [getReviews, setGetReviews] = useState(ORG_ST_Review(name, lastName))
  const [allUserNames, setAllUserNames] = useState(ORG_ReviewsUsersName())

  return (
    <ST_M_Detail_ReviewsWrapper
      id="Reviews"
      ref={theRef}
      scrollMarginTopState={scrollMarginTopState}>
      <div>
        <Caption
          primary_hover
          bolder>
          Reviews
        </Caption>
        <Caption>All reviews are submitted by verified patients or their responsible party.</Caption>
      </div>

      <div>
        {getReviews.map((x, i) => (
          <Fragment key={`${x}_${allUserNames[i]}`}>
            <ST_M_Detail_Reviews_IndividualComponent
              review={x}
              userName={allUserNames[i]}
            />
          </Fragment>
        ))}
      </div>

      <P
        hyperlink_normal
        semibold>
        View All
      </P>
    </ST_M_Detail_ReviewsWrapper>
  )
}
