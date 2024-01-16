import { ButtonSmall } from "@/components/ui/buttons/general/index"
import { useORG_Ctx_D_ThirdpageData_Backend } from "@/context/ORG_Ctx_D_ThirdpageData_Backend_Provider.js"
import { useORG_Ctx_D_ThirdpageData } from "@/context/ORG_Ctx_D_ThirdpageData_Provider.js"
import { DATA_ORG_D_TYPES_KEYS } from "@/utils/org/DATA_ORG_D"
import { DATA_ORG_KeyNamesForCards_D_KEYS } from "@/utils/org/DATA_ORG_KeyNamesForCards_D"
import { ArraySection_KEYS } from "@/utils/org/third-page/InnerNavBar"
import { useRouter } from "next/router.js"
import { Fragment, useRef, useState } from "react"
import { ORG_Detail_SearchFAQSSVG } from "../../../../../assets/icons/index.js"
import { useCtx_ShowModal } from "../../../../../context/Ctx_ShowModal.js"
import { ORG_ReviewsUsersName } from "../../../../../utils/ORG_ReviewsUsersName.js"
import { ORG_ST_FAQS } from "../../../../../utils/ORG_ST_FAQS_D.js"
import { ORG_ST_Review_Months } from "../../../../../utils/ORG_ST_Review_D.js"
import { useScrollLock } from "../../../../../utils/useScrollLock.js"
import { P } from "../../../../ui/heading_body_text/DesktopMobileFonts"
import { H3, H4 } from "../../../../ui/heading_body_text/HeaderFonts"
import { ORG_D_Detail_FAQS_Modal } from "./ORG_D_Detail_FAQS_Modal.js"
import { ORG_D_Detail_FAQS_VoteQuestionsAnswers } from "./ORG_D_Detail_FAQS_VoteQuestionsAnswers.js"
import { ORG_D_Detail_FAQSWrapper } from "./styles/ORG_D_Detail_FAQSWrapper"

export const ORG_D_Detail_FAQS = ({
  [ArraySection_KEYS.ALL_DATA]: allProps,
}) => {
  const { theIdForComponent = "#" } = allProps || {}

  const { thirdpageDataORG }: any = useORG_Ctx_D_ThirdpageData()

  const { card } = thirdpageDataORG

  const [showAll, setShowAll] = useState(false)
  const [allUserNames, setAllUserNames] = useState(ORG_ReviewsUsersName(5))
  const [month, setMonth] = useState(ORG_ST_Review_Months(5))

  const { query } = useRouter()

  const { thirdpageDataORG: thirdpageDataORG_backend }: any =
    useORG_Ctx_D_ThirdpageData_Backend()

  const [faqsData, setFaqsData] = useState(
    !query[DATA_ORG_D_TYPES_KEYS.IS_FROM_BACKEND]
      ? ORG_ST_FAQS(
          card.leftPart.title,
          "",
          card.leftPart.location.city,
          card.leftPart.location.streetNumber,
          card.leftPart.location.streetName,
          card.leftPart.location.state
        )
      : ORG_ST_FAQS(
          thirdpageDataORG_backend[DATA_ORG_KeyNamesForCards_D_KEYS.ALL_DATA]
            .recordName,
          "",
          thirdpageDataORG_backend[DATA_ORG_KeyNamesForCards_D_KEYS.ALL_DATA]
            .address[0].city,
          thirdpageDataORG_backend[DATA_ORG_KeyNamesForCards_D_KEYS.ALL_DATA]
            .address[0].street,
          "",
          thirdpageDataORG_backend[DATA_ORG_KeyNamesForCards_D_KEYS.ALL_DATA]
            .address[0].state
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
      lockScroll()
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
      <ORG_D_Detail_FAQSWrapper
        id={theIdForComponent}
        ref={toMoveTheView}
        isBackend={Boolean(query[DATA_ORG_D_TYPES_KEYS.IS_FROM_BACKEND])}
      >
        <H3>Frequently Asked Questions</H3>

        <div>
          <div>
            <ORG_Detail_SearchFAQSSVG />
            <input type="text" placeholder="Search in Q&A..." />
          </div>
          <span onClick={handleShowModal}>
            <ButtonSmall secondary>Ask a Question</ButtonSmall>
          </span>
        </div>

        <div>
          <H4>Common Questions and Answers</H4>
        </div>

        <div>
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
        </div>

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
      </ORG_D_Detail_FAQSWrapper>

      {showModal && (
        <ORG_D_Detail_FAQS_Modal
          showModal={showModal}
          handleHideModal={handleHideModal}
          name={
            !Boolean(query[DATA_ORG_D_TYPES_KEYS.IS_FROM_BACKEND])
              ? card.leftPart.title
              : thirdpageDataORG_backend[
                  DATA_ORG_KeyNamesForCards_D_KEYS.ALL_DATA
                ].recordName
          }
          lastName={""}
          setFaqsData={setFaqsData}
        />
      )}
    </>
  )
}
