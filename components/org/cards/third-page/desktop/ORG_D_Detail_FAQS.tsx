import { ORG_Detail_SearchFAQSSVG } from "@/assets/icons/index"
import { Dialog_D, useDialogLogic } from "@/components/ui/dialog/Dialog_D"
import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { H2, H4 } from "@/components/ui/heading_body_text/HeaderFonts"
import { useORG_Ctx_D_ThirdpageData_Backend } from "@/context/ORG_Ctx_D_ThirdpageData_Backend_Provider"
import { ORG_ReviewsUsersName } from "@/utils/ORG_ReviewsUsersName"
import { ORG_ST_FAQS } from "@/utils/ORG_ST_FAQS_D"
import { ORG_ST_Review_Months } from "@/utils/ORG_ST_Review_D"
import { DATA_ORG_KeyNamesForCards_D_KEYS } from "@/utils/org/DATA_ORG_KeyNamesForCards_D"
import { ArraySection_KEYS } from "@/utils/org/third-page/InnerNavBar"
import { Fragment, useRef, useState } from "react"
import { ORG_D_Detail_FAQS_Modal } from "./ORG_D_Detail_FAQS_Modal"
import { ORG_D_Detail_FAQS_VoteQuestionsAnswers } from "./ORG_D_Detail_FAQS_VoteQuestionsAnswers"
import { ORG_D_Detail_FAQSWrapper } from "./styles/ORG_D_Detail_FAQSWrapper"

export const ORG_D_Detail_FAQS = ({
  [ArraySection_KEYS.ALL_DATA]: allProps,
}) => {
  const { theIdForComponent = "#" } = allProps || {}

  const [showAll, setShowAll] = useState(false)
  const [allUserNames, setAllUserNames] = useState(ORG_ReviewsUsersName(5))
  const [month, setMonth] = useState(ORG_ST_Review_Months(5))

  const { thirdpageDataORG: thirdpageDataORG_backend }: any =
    useORG_Ctx_D_ThirdpageData_Backend()

  const [faqsData, setFaqsData] = useState(
    ORG_ST_FAQS(
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

  const {
    dialogRef,
    openDialog,
    closeDialog,
    refToCloseDialogClickingOutside,
    useHide,
    checkModalIsOpen,
  } = useDialogLogic()

  return (
    <>
      <ORG_D_Detail_FAQSWrapper id={theIdForComponent} ref={toMoveTheView}>
        <header>
          <H2>Frequently Asked Questions</H2>
        </header>

        <div>
          <div>
            <div>
              <ORG_Detail_SearchFAQSSVG />
              <input type="text" placeholder="Search in Q&A..." />
            </div>
            <button
              onClick={(e) => openDialog({ event: e })}
              onKeyDown={(e) => openDialog({ event: e })}
            >
              Ask a Question
            </button>
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
        </div>
      </ORG_D_Detail_FAQSWrapper>

      <Dialog_D
        theRef={dialogRef}
        handleCloseDialog={(e) => closeDialog({ event: e })}
        refToCloseDialogClickingOutside={refToCloseDialogClickingOutside}
        useHide={useHide}
      >
        <ORG_D_Detail_FAQS_Modal
          name={
            thirdpageDataORG_backend[DATA_ORG_KeyNamesForCards_D_KEYS.ALL_DATA]
              .recordName
          }
          lastName={""}
          setFaqsData={setFaqsData}
          hide={closeDialog}
        />
      </Dialog_D>
    </>
  )
}
