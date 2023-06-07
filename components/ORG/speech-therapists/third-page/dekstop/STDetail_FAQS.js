import { Fragment, useState } from "react"
import { Search_STDetail_FAQSSVG } from "../../../../../assets/Icons/index.js"
import { ORG_ReviewsUsersName } from "../../../../../utils/ORG_ReviewsUsersName.js"
import { ORG_ST_FAQS } from "../../../../../utils/ORG_ST_FAQS.js"
import { ORG_ST_Review_Months } from "../../../../../utils/ORG_ST_Review.js"
import { ButtonSmall } from "../../../../ui/buttons/general/index.js"
import { P } from "../../../../ui/heading_body_text/DesktopMobileFonts.js"
import { H4 } from "../../../../ui/heading_body_text/HeaderFonts.js"
import { STDetail_FAQS_VoteQuestionsAnswers } from "./STDetail_FAQS_VoteQuestionsAnswers.js"
import { STDetail_FAQSWrapper } from "./styles/STDetail_FAQSWrapper.js"

export const STDetail_FAQS = ({
  name,
  lastName,
  locationCity,
  locationStreetNumber,
  locationStreetName,
  locationState
}) => {
  const [showAll, setShowAll] = useState(false)
  const [allUserNames, setAllUserNames] = useState(ORG_ReviewsUsersName(5))
  /* 
  !FH0
  Make this return more then one month
  */
  const [month, setMonth] = useState(ORG_ST_Review_Months(5))

  const [faqsData, setFaqsData] = useState(
    ORG_ST_FAQS(name, lastName, locationCity, locationStreetNumber, locationStreetName, locationState)
  )

  const handleShowAll = () => {
    setShowAll((prevState) => !prevState)
  }

  // console.log("allUserNames:", allUserNames)
  /* 
  !FH0
  Finish this component
  */

  return (
    <STDetail_FAQSWrapper id="FAQs">
      <div>
        <Search_STDetail_FAQSSVG />
        <input
          type="text"
          placeholder="Search in Q&A..."
        />
      </div>
      <div>
        <H4 hover>Common Questions and Answers</H4>
        <ButtonSmall secondary>Ask a Question</ButtonSmall>
      </div>
      {faqsData.votes.map((x, i) => {
        if (showAll) {
          return (
            <Fragment key={`${faqsData.answers[i]}_${i}`}>
              <STDetail_FAQS_VoteQuestionsAnswers
                votes={x}
                questions={faqsData.questions[i]}
                answers={faqsData.answers[i]}
                allUserNames={allUserNames[i]}
                month={month[i]}
              />
            </Fragment>
          )
        } else {
          while (i < 3) {
            return (
              <Fragment key={`${faqsData.answers[i]}_${i}`}>
                <STDetail_FAQS_VoteQuestionsAnswers
                  votes={x}
                  questions={faqsData.questions[i]}
                  answers={faqsData.answers[i]}
                  allUserNames={allUserNames[i]}
                  month={month[i]}
                />
              </Fragment>
            )
          }
        }
      })}

      {showAll === false ? (
        <>
          <P
            hyperlink_normal
            semibold
            underline
            onClick={handleShowAll}>
            See More
          </P>
        </>
      ) : (
        <>
          <P
            hyperlink_normal
            semibold
            underline
            onClick={handleShowAll}>
            See Less
          </P>
        </>
      )}
    </STDetail_FAQSWrapper>
  )
}
