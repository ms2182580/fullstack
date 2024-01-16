import { useEffect, useRef, useState } from "react"
import { ORG_M_Detail_FAQS_ModalWrapper } from "./styles/ORG_M_Detail_FAQS_ModalWrapper"
import { XSvg } from "@/assets/icons"
import { H4 } from "@/components/ui/heading_body_text/HeaderFonts"
import { Caption } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { ButtonSmall } from "@/components/ui/buttons/general"

export const ORG_M_Detail_FAQS_Modal = ({
  showModal,
  handleHideModal,
  name,
  lastName,
  setFaqsData,
}) => {
  const componentRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent | KeyboardEvent) {
      if (
        (componentRef.current &&
          !componentRef.current.contains(event.target as Node) &&
          event.type === "mousedown") ||
        ((event as KeyboardEvent).key === "Escape" && event.type === "keydown")
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

  return (
    <ORG_M_Detail_FAQS_ModalWrapper ref={componentRef} showModal={showModal}>
      <span onClick={handleHideModal} onKeyDown={handleHideModal} tabIndex={0}>
        <XSvg />
      </span>
      <H4 primary_hover>Question</H4>
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
    </ORG_M_Detail_FAQS_ModalWrapper>
  )
}
