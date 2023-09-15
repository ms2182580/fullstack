import { Fragment, useRef, useState } from "react"
import { ORG_Detail_SearchFAQSSVG } from "../../../../../../../../assets/Icons/index.js"
import { useCtx_ShowModal } from "../../../../../../../../context/Ctx_ShowModal.js"
import { ORG_ReviewsUsersName } from "../../../../../../../../utils/ORG_ReviewsUsersName.js"
import { ORG_ST_FAQS } from "../../../../../../../../utils/ORG_ST_FAQS_D.js"
import { ORG_ST_Review_Months } from "../../../../../../../../utils/ORG_ST_Review_D.js"
import { useScrollLock } from "../../../../../../../../utils/useScrollLock.js"
import { ButtonSmall } from "../../../../../../../ui/buttons/general/index.js"
import { P } from "../../../../../../../ui/heading_body_text/DesktopMobileFonts.js"
import { H3, H4 } from "../../../../../../../ui/heading_body_text/HeaderFonts.js"
import { CC_D_Detail_FAQS_Modal } from "./CC_D_Detail_FAQS_Modal.js"
import { CC_D_Detail_FAQS_VoteQuestionsAnswers } from "./CC_D_Detail_FAQS_VoteQuestionsAnswers.js"
import { CC_Karate_D_FAQSWrapper } from "./styles/CC_Karate_D_FAQSWrapper.js"

export const CC_Karate_D_FAQS = ({ name, lastName, locationCity, locationStreetNumber, locationStreetName, locationState }) => {
  const [showAll, setShowAll] = useState(false)
  const [allUserNames, setAllUserNames] = useState(ORG_ReviewsUsersName(5))
  const [month, setMonth] = useState(ORG_ST_Review_Months(5))

  const [faqsData, setFaqsData] = useState(ORG_ST_FAQS(name, lastName, locationCity, locationStreetNumber, locationStreetName, locationState))

  const handleShowAll = () => {
    setShowAll((prevState) => !prevState)
  }

  const toMoveTheView = useRef()

  const handleToMoveTo = () => {
    const position = toMoveTheView.current.getBoundingClientRect().top + window.scrollY
    window.scrollTo({ top: position })
  }

  const [showModal, setShowModal] = useState(false)
  const { lockScroll, unlockScroll } = useScrollLock()
  const { setModalShowedCtx } = useCtx_ShowModal()

  const handleShowModal = () => {
    lockScroll()
    setShowModal(true)
    setModalShowedCtx(true)
  }

  const handleHideModal = () => {
    unlockScroll()
    setShowModal(false)
    setModalShowedCtx(false)
  }

  return (
    <>
      <CC_Karate_D_FAQSWrapper
        id="FAQs"
        ref={toMoveTheView}>
        <H3 bold>Frequently Asked Questions</H3>

        <div>
          <ORG_Detail_SearchFAQSSVG />
          <input
            type="text"
            placeholder="Search in Q&A..."
          />
        </div>

        <div>
          <H4 bold hover>Common Questions and Answers</H4>
          <span onClick={handleShowModal}>
            <ButtonSmall secondary>Ask a Question</ButtonSmall>
          </span>
        </div>

        {faqsData.votes.map((x, i) => {
          if (showAll) {
            return (
              <Fragment key={`${faqsData.answers[i]}_${i}`}>
                <CC_D_Detail_FAQS_VoteQuestionsAnswers
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
                  <CC_D_Detail_FAQS_VoteQuestionsAnswers
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
              onClick={() => {
                handleShowAll()
                handleToMoveTo()
              }}>
              See Less
            </P>
          </>
        )}
      </CC_Karate_D_FAQSWrapper>

      {showModal && (
        <CC_D_Detail_FAQS_Modal
          showModal={showModal}
          handleHideModal={handleHideModal}
          name={name}
          lastName={lastName}
          setFaqsData={setFaqsData}
        />
      )}
    </>
  )
}
