import { ArrowDownSvg } from "@/assets/icons"
import UserCheckedSVG from "@/assets/icons/org/third-page/user-checked.svg"
import { PatternStars } from "@/components/org/stars-rating-review/PatternsStars.js"
import { Tooltip } from "@/components/tooltip/Tooltip"
import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { ORG_ReviewsUsersName } from "@/utils/ORG_ReviewsUsersName.js"
import { ORG_ST_Review_Months } from "@/utils/ORG_ST_Review_D.js"
import { useMemo } from "react"
import { ORG_D_Detail_Reviews_IndividualComponentWrapper } from "./styles/ORG_D_Detail_Reviews_IndividualComponentWrapper"

const adittionalData = [
  "Agency Admin, Partners Health...",
  "Used resource for a client.",
  "Parent, Son (17 years-old)",
  "Used resource for self",
]
/* 
!FH0
Eliminate "isModal" from here
*/

type Props = {
  getReviews: (string | { review: string; stars: number })[] | any
  howManyShow: number
}

export const ORG_D_Detail_Reviews_IndividualComponent = ({
  getReviews,
  howManyShow,
}: Props) => {
  const allUserNames = useMemo(() => {
    if (Array.isArray(getReviews)) {
      return ORG_ReviewsUsersName(getReviews?.length)
    }
  }, [])

  const theDate = useMemo(() => ORG_ST_Review_Months(), [])

  return (
    <ORG_D_Detail_Reviews_IndividualComponentWrapper>
      <button>
        Most Relevant
        <ArrowDownSvg />
      </button>
      <ul>
        {Array.isArray(getReviews) &&
          getReviews.map((xReview, index) => {
            const shouldDisplaySomeFinalAdditionalText =
              index % adittionalData.length

            while (index < howManyShow) {
              return (
                <li key={`${xReview}_${allUserNames?.[index]}`}>
                  <PatternStars
                    rating={typeof xReview === "string" ? 5 : xReview.stars}
                  />
                  {typeof xReview === "string" ? (
                    <P>"{xReview}."</P>
                  ) : (
                    <P>"{xReview.review}."</P>
                  )}
                  <footer>
                    <div>
                      <P>
                        -{allUserNames?.[shouldDisplaySomeFinalAdditionalText]}
                      </P>
                      <P>{theDate} 2023</P>
                    </div>
                    <div>
                      {index === 0 ? (
                        "*Review Source*"
                      ) : (
                        <Tooltip
                          whichIconToUse={<UserCheckedSVG />}
                          dataOnTooltip={<p>"Verified Review"</p>}
                        />
                      )}
                    </div>
                  </footer>
                </li>
              )
            }
          })}
      </ul>
    </ORG_D_Detail_Reviews_IndividualComponentWrapper>
  )
}
