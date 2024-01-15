import { DATA_ORG_D_TYPES_KEYS } from "@/utils/org/DATA_ORG_D"
import { useRouter } from "next/router.js"
import { useEffect, useRef, useState } from "react"
import { XSvg } from "../../../../../assets/icons/index.js"
import { ButtonSmall } from "../../../../ui/buttons/general/index"
import { Caption } from "../../../../ui/heading_body_text/DesktopMobileFonts.js"
import { H4 } from "../../../../ui/heading_body_text/HeaderFonts.js"
import { ORG_D_Detail_FAQS_ModalWrapper } from "./styles/ORG_D_Detail_FAQS_ModalWrapper.js"

export const ORG_D_Detail_FAQS_Modal = ({
  showModal,
  handleHideModal,
  name,
  lastName,
  setFaqsData,
}) => {
  const componentRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        (componentRef.current &&
          !componentRef.current.contains(event.target) &&
          event.type === "mousedown") ||
        (event.key === "Escape" && event.type === "keydown")
      ) {
        handleHideModal(event)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    document.addEventListener("keydown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleClickOutside)
    }
  }, [componentRef])

  const [newQuestion, setNewQuestion] = useState("")
  const handleNewQuestion = (e) => {
    setNewQuestion(e.target.value)
  }

  const handleAddQuestion = () => {
    setFaqsData((prevState) => {
      return {
        ...prevState,
        answers: [...prevState.answers, ""],
        questions: [...prevState.questions, newQuestion],
        votes: [...prevState.votes, 0],
      }
    })
  }

  const { query } = useRouter()

  return (
    <ORG_D_Detail_FAQS_ModalWrapper
      ref={componentRef}
      showModal={showModal}
      isBackend={Boolean(query[DATA_ORG_D_TYPES_KEYS.IS_FROM_BACKEND])}
    >
      <span onClick={handleHideModal} onKeyDown={handleHideModal} tabIndex={0}>
        <XSvg />
      </span>
      <H4 hover>Question</H4>
      {Boolean(query[DATA_ORG_D_TYPES_KEYS.IS_FROM_BACKEND]) ? (
        <>
          <div>
            <Caption>
              Got a question about {name} {lastName} SLP? Ask the Inclusive
              community!
            </Caption>
            <textarea
              onChange={handleNewQuestion}
              placeholder={`What would you like to know about ${name} ${lastName}, CCC-SLP?`}
              tabIndex={-1}
            />
          </div>
        </>
      ) : (
        <>
          <label>
            <Caption>
              Got a question about {name} {lastName} SLP? Ask the Inclusive
              community!
            </Caption>
            <textarea
              onChange={handleNewQuestion}
              autoFocus
              placeholder={`What would you like to know about ${name} ${lastName}, CCC-SLP?`}
            />
          </label>
        </>
      )}

      <span
        onClick={(e) => {
          handleHideModal(e)
          handleAddQuestion()
        }}
      >
        <ButtonSmall
          secondary
          disabled={newQuestion.trim() === "" ? true : false}
        >
          Post Question
        </ButtonSmall>
      </span>
    </ORG_D_Detail_FAQS_ModalWrapper>
  )
}
