import ORG_D_Detail_Review from "@/assets/Icons/ORG_D_Detail_Review.png"
import { PatternStars } from "@/components/ORG/stars-rating-review/PatternsStars.js"
import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts.js"
import { ORG_ReviewsUsersName } from "@/utils/ORG_ReviewsUsersName.js"
import { ORG_ST_Review_Months } from "@/utils/ORG_ST_Review_D.js"
import Image from "next/image.js"
import { useMemo } from "react"
import { ORG_D_Detail_Reviews_IndividualComponentWrapper, ORG_D_Detail_Reviews_IndividualComponent_Classes } from "./styles/ORG_D_Detail_Reviews_IndividualComponentWrapper"

const adittionalData = ["Agency Admin, Partners Health...", "Used resource for a client.", "Parent, Son (17 years-old)", "Used resource for self"]

export const ORG_D_Detail_Reviews_IndividualComponent = ({ getReviews, isModal = false }) => {
  const allUserNames = useMemo(() => ORG_ReviewsUsersName(getReviews.length), [])

  const theDate = useMemo(() => ORG_ST_Review_Months(), [])

  return (
    <ORG_D_Detail_Reviews_IndividualComponentWrapper isModal={isModal}>
      {getReviews.map((xReview, index) => {
        let shouldDisplaySomeFinalAdditionalText = index % adittionalData.length

        const modifiedArray = adittionalData[0].split(" ").map((item, index) => {
          if (index < 2) {
            return <span className="FIRST_TWO">{item}</span>
          } else {
            return (
              <span
                className="LAST_TWO"
                key={index}>
                {item}
              </span>
            )
          }
        })

        return (
          <div key={`${xReview}_${allUserNames[index]}`}>
            <PatternStars rating={typeof xReview === "string" ? 5 : xReview.stars} />

            {typeof xReview === "string" ? <P>"{xReview}."</P> : <P>"{xReview.review}."</P>}

            <footer className={isModal ? ORG_D_Detail_Reviews_IndividualComponent_Classes.IS_MODAL : ORG_D_Detail_Reviews_IndividualComponent_Classes.IS_COMPONENT}>
              <div>
                <P bold>-{allUserNames[shouldDisplaySomeFinalAdditionalText]}</P>
                <P>{theDate} 2022</P>
              </div>

              <div>
                <span>{index === 0 ? modifiedArray : adittionalData[shouldDisplaySomeFinalAdditionalText]}</span>
                {index === 2 && (
                  <span
                    tabIndex={0}
                    data-text="Verified Review">
                    <Image src={ORG_D_Detail_Review} />
                  </span>
                )}
              </div>
            </footer>
          </div>
        )
      })}
    </ORG_D_Detail_Reviews_IndividualComponentWrapper>
  )
}
