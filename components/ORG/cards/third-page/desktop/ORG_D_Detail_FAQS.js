import { ButtonSmall } from "@/components/ui/buttons/general/index"
import { useORG_Ctx_D_ThirdpageData } from "@/context/ORG_Ctx_D_ThirdpageData_Provider.js"
import { InnerNavBar_InnerData_KEYS } from "@/utils/ORG/third-page/InnerNavBar"
import { Fragment, useRef, useState } from "react"
import { ORG_Detail_SearchFAQSSVG } from "../../../../../assets/Icons/index.js"
import { useCtx_ShowModal } from "../../../../../context/Ctx_ShowModal.js"
import { ORG_ReviewsUsersName } from "../../../../../utils/ORG_ReviewsUsersName.js"
import { ORG_ST_FAQS } from "../../../../../utils/ORG_ST_FAQS_D.js"
import { ORG_ST_Review_Months } from "../../../../../utils/ORG_ST_Review_D.js"
import { useScrollLock } from "../../../../../utils/useScrollLock.js"
import { P } from "../../../../ui/heading_body_text/DesktopMobileFonts.js"
import { H3, H4 } from "../../../../ui/heading_body_text/HeaderFonts.js"
import { ORG_D_Detail_FAQS_Modal } from "./ORG_D_Detail_FAQS_Modal.js"
import { ORG_D_Detail_FAQS_VoteQuestionsAnswers } from "./ORG_D_Detail_FAQS_VoteQuestionsAnswers.js"
import { ORG_D_Detail_FAQSWrapper } from "./styles/ORG_D_Detail_FAQSWrapper.js"

export const ORG_D_Detail_FAQS = ({ defaultId = "faqs", arrayInnerNavBar }) => {
  const { thirdpageDataORG } = useORG_Ctx_D_ThirdpageData()

  const { card } = thirdpageDataORG

  const [showAll, setShowAll] = useState(false)
  const [allUserNames, setAllUserNames] = useState(ORG_ReviewsUsersName(5))
  const [month, setMonth] = useState(ORG_ST_Review_Months(5))

  const [faqsData, setFaqsData] = useState(
    ORG_ST_FAQS(card.leftPart.title, "", card.leftPart.location.city, card.leftPart.location.streetNumber, card.leftPart.location.streetName, card.leftPart.location.state),
  )

  const handleShowAll = (e) => {
    if (e.type === "click" || e.code === "Enter" || e.key === "Enter") {
      setShowAll((prevState) => !prevState)
    }
  }

  const toMoveTheView = useRef()

  let handleMoveUserView = (e) => {
    if (e.type === "click" || e.code === "Enter" || e.key === "Enter") {
      const position = toMoveTheView.current.getBoundingClientRect().top + window.scrollY
      window.scrollTo({ top: position })
    }
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
      <ORG_D_Detail_FAQSWrapper id={Boolean(arrayInnerNavBar) ? arrayInnerNavBar[5][InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_KEY] : defaultId}>
        <H3 semibold>Frequently Asked Questions</H3>

        <div>
          <ORG_Detail_SearchFAQSSVG />
          <input
            type="text"
            placeholder="Search in Q&A..."
          />
          <span onClick={handleShowModal}>
            <ButtonSmall secondary>Ask a Question</ButtonSmall>
          </span>
        </div>

        <div>
          <H4
            bold
            hover>
            Common Questions and Answers
          </H4>
        </div>

        {faqsData.votes.map((x, i) => {
          if (showAll) {
            return (
              <Fragment key={`${faqsData.answers[i]}_${i}`}>
                <ORG_D_Detail_FAQS_VoteQuestionsAnswers
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
                  <ORG_D_Detail_FAQS_VoteQuestionsAnswers
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
              onClick={handleShowAll}
              onKeyDown={handleShowAll}
              tabIndex={0}>
              See More
            </P>
          </>
        ) : (
          <>
            <P
              hyperlink_normal
              semibold
              underline
              onClick={(e) => {
                handleShowAll(e)
                handleMoveUserView(e)
              }}
              onKeyDown={(e) => {
                handleShowAll(e)
                handleMoveUserView(e)
              }}
              tabIndex={0}>
              See Less
            </P>
          </>
        )}
      </ORG_D_Detail_FAQSWrapper>

      {showModal && (
        <ORG_D_Detail_FAQS_Modal
          showModal={showModal}
          handleHideModal={handleHideModal}
          name={card.leftPart.title}
          lastName={""}
          setFaqsData={setFaqsData}
        />
      )}
    </>
  )
}
