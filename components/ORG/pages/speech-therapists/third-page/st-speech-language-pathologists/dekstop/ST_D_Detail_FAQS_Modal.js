import { useEffect, useRef, useState } from "react"
import { XSvg } from "../../../../../../../assets/Icons/index.js"
import { ButtonSmall } from "../../../../../../ui/buttons/general/index.js"
import { Caption } from "../../../../../../ui/heading_body_text/DesktopMobileFonts.js"
import { H4 } from "../../../../../../ui/heading_body_text/HeaderFonts.js"
import { ST_D_Detail_FAQS_ModalWrapper } from "./styles/ST_D_Detail_FAQS_ModalWrapper.js"

export const ST_D_Detail_FAQS_Modal = ({ showModal, handleHideModal, name, lastName, setFaqsData }) => {
  const componentRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (componentRef.current && !componentRef.current.contains(event.target)) {
        handleHideModal()
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
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
        votes: [...prevState.votes, 0]
      }
    })
  }

  return (
    <ST_D_Detail_FAQS_ModalWrapper
      ref={componentRef}
      showModal={showModal}>
      <span onClick={() => handleHideModal()}>
        <XSvg />
      </span>
      <H4 hover>Question</H4>
      <label>
        <Caption>
          Got a question about {name} {lastName} SLP? Ask the Inclusive community!
        </Caption>
        <textarea
          onChange={handleNewQuestion}
          autoFocus
          placeholder={`What would you like to know about ${name} ${lastName}, CCC-SLP?`}
        />
      </label>

      <span
        onClick={(e) => {
          handleHideModal(e)
          handleAddQuestion()
        }}>
        <ButtonSmall
          secondary
          disabled={newQuestion.trim() === "" ? true : false}>
          Post Question
        </ButtonSmall>
      </span>
    </ST_D_Detail_FAQS_ModalWrapper>
  )
}
