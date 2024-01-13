import { ButtonSmall } from "@/components/ui/buttons/general/index"
import { useCtx_ShowModal } from "@/context/Ctx_ShowModal"
import { useORG_Ctx_D_ThirdpageData } from "@/context/ORG_Ctx_D_ThirdpageData_Provider.js"
import { ORG_ReviewsUsersName } from "@/utils/ORG_ReviewsUsersName"
import { ORG_ST_FAQS } from "@/utils/ORG_ST_FAQS_D"
import { ORG_ST_Review_Months } from "@/utils/ORG_ST_Review_D"
import { ArraySection_KEYS } from "@/utils/org/third-page/InnerNavBar"
import { useScrollLock } from "@/utils/useScrollLock"
import { Fragment, useRef, useState } from "react"
// import { ORG_D_Detail_FAQSWrapper } from "../desktop/styles/ORG_D_Detail_FAQSWrapper"
import { H3, H4 } from "@/components/ui/heading_body_text/HeaderFonts"
// import { ORG_Detail_SearchFAQSSVG } from "@/assets/icons"
import { ORG_D_Detail_FAQS_VoteQuestionsAnswers } from "../desktop/ORG_D_Detail_FAQS_VoteQuestionsAnswers"
import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { ORG_D_Detail_FAQS_Modal } from "../desktop/ORG_D_Detail_FAQS_Modal"
import { ORG_M_Detail_FAQSWrapper } from "./styles/ORG_M_Detail_FAQSWrapper"
import { ORG_M_Detail_FAQS_VoteQuestionsAnswers } from "./ORG_M_Detail_FAQS_VoteQuestionsAnswers"
import { ORG_Detail_SearchFAQSSVG } from "@/assets/icons"
import { ORG_M_Detail_FAQS_Modal } from "./ORG_M_Detail_FAQS_Modal"
// import { ORG_Detail_SearchFAQSSVG } from "../../../../../assets/icons/index.js"
// import { useCtx_ShowModal } from "../../../../../context/Ctx_ShowModal.js"
// import { ORG_ReviewsUsersName } from "../../../../../utils/ORG_ReviewsUsersName.js"
// import { ORG_ST_FAQS } from "../../../../../utils/ORG_ST_FAQS_D.js"
// import { ORG_ST_Review_Months } from "../../../../../utils/ORG_ST_Review_D.js"
// import { useScrollLock } from "../../../../../utils/useScrollLock.js"
// import { P } from "../../../../ui/heading_body_text/DesktopMobileFonts.js"
// import { H3, H4 } from "../../../../ui/heading_body_text/HeaderFonts.js"
// import { ORG_D_Detail_FAQSWrapper } from "../desktop/styles/ORG_D_Detail_FAQSWrapper.js"
// import { ORG_D_Detail_FAQS_VoteQuestionsAnswers } from "../desktop/ORG_D_Detail_FAQS_VoteQuestionsAnswers.js"
// import { ORG_D_Detail_FAQS_Modal } from "../desktop/ORG_D_Detail_FAQS_Modal.js"
// import { ORG_D_Detail_FAQS_Modal } from "./ORG_D_Detail_FAQS_Modal.js"
// import { ORG_D_Detail_FAQS_VoteQuestionsAnswers } from "./ORG_D_Detail_FAQS_VoteQuestionsAnswers.js"
// import { ORG_D_Detail_FAQSWrapper } from "./styles/ORG_D_Detail_FAQSWrapper"

export const ORG_M_Detail_FAQS = ({
  [ArraySection_KEYS.ALL_DATA]: allProps,
}) => {
  const { theIdForComponent = "#" } = allProps || {}

  const { thirdpageDataORG }: any = useORG_Ctx_D_ThirdpageData()

  const { card } = thirdpageDataORG

  const [showAll, setShowAll] = useState(false)
  const [allUserNames, setAllUserNames] = useState(ORG_ReviewsUsersName(5))
  const [month, setMonth] = useState(ORG_ST_Review_Months(5))

  const [faqsData, setFaqsData] = useState(
    ORG_ST_FAQS(
      card.leftPart.title,
      "",
      card.leftPart.location.city,
      card.leftPart.location.streetNumber,
      card.leftPart.location.streetName,
      card.leftPart.location.state
    )
  )

  const handleShowAll = (e) => {
    if (e.type === "click" || e.code === "Enter" || e.key === "Enter") {
      setShowAll((prevState) => !prevState)
    }
  }

  const toMoveTheView = useRef<HTMLElement>(null)

  let handleMoveUserView = (e) => {
    if (e.type === "click" || e.code === "Enter" || e.key === "Enter") {
      const position =
        toMoveTheView!.current!.getBoundingClientRect().top + window.scrollY
      window.scrollTo({ top: position })
    }
  }

  const [showModal, setShowModal] = useState(false)
  const { lockScroll, unlockScroll } = useScrollLock()
  const { setModalShowedCtx }: any = useCtx_ShowModal()

  const handleShowModal = (e) => {
    if (e.type === "click" || e.key === "Enter") {
      // lockScroll()
      setShowModal(true)
      setModalShowedCtx(true)
    }
  }

  const handleHideModal = (e) => {
    if (
      e.key === "Enter" ||
      e.key === "Escape" ||
      e.type === "mousedown" ||
      e.type === "click"
    ) {
      unlockScroll()
      setShowModal(false)
      setModalShowedCtx(false)
    }
  }

  return (
    <>
      <ORG_M_Detail_FAQSWrapper id={theIdForComponent} ref={toMoveTheView}>
        <div>
          <ORG_Detail_SearchFAQSSVG />
          <input type="text" placeholder="Search in Q&A..." />
        </div>
        <H4>Common Questions and Answers</H4>

        {faqsData.votes.map((x, i) => {
          if (showAll) {
            return (
              <Fragment key={`${faqsData.answers[i]}_${i}`}>
                <ORG_M_Detail_FAQS_VoteQuestionsAnswers
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
                  <ORG_M_Detail_FAQS_VoteQuestionsAnswers
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
            <P onClick={handleShowAll} onKeyDown={handleShowAll} tabIndex={0}>
              See More
            </P>
          </>
        ) : (
          <>
            <P
              onClick={(e) => {
                handleShowAll(e)
                handleMoveUserView(e)
              }}
              onKeyDown={(e) => {
                handleShowAll(e)
                handleMoveUserView(e)
              }}
              tabIndex={0}
            >
              See Less
            </P>
          </>
        )}
        <span onClick={handleShowModal}>
          <ButtonSmall>Ask a Question</ButtonSmall>
        </span>
      </ORG_M_Detail_FAQSWrapper>

      {showModal && (
        <ORG_M_Detail_FAQS_Modal
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
