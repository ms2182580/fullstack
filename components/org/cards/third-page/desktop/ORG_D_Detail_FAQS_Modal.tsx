import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { H3 } from "@/components/ui/heading_body_text/HeaderFonts"
import { useState } from "react"
import { ORG_D_Detail_FAQS_ModalWrapper } from "./styles/ORG_D_Detail_FAQS_ModalWrapper"

export const ORG_D_Detail_FAQS_Modal = ({
  name,
  lastName,
  setFaqsData,
  hide,
}) => {
  const [newQuestion, setNewQuestion] = useState("")
  const handleNewQuestion = (e) => {
    setNewQuestion(e.target.value)
  }

  const handleAddQuestion = (e) => {
    if (
      e?.type === "click" ||
      (e?.code === "Enter" && e?.key === "Enter" && e?.type === "keydown")
    ) {
      setFaqsData((prevState) => {
        return {
          ...prevState,
          answers: [...prevState.answers, ""],
          questions: [...prevState.questions, newQuestion],
          votes: [...prevState.votes, 0],
        }
      })
      setNewQuestion("")
      hide({ event: e })
    }
  }

  return (
    <ORG_D_Detail_FAQS_ModalWrapper>
      <header>
        <H3>Question</H3>
      </header>
      <div>
        <div>
          <P>
            Got a question about {name} {lastName} SLP? Ask the Inclusive
            community!
          </P>
          <textarea
            value={newQuestion}
            onChange={handleNewQuestion}
            placeholder={`What would you like to know about ${name} ${lastName}, CCC-SLP?`}
            tabIndex={0}
          />
        </div>

        <button
          disabled={newQuestion.trim() === "" ? true : false}
          onClick={handleAddQuestion}
        >
          submit
        </button>
      </div>
    </ORG_D_Detail_FAQS_ModalWrapper>
  )
}
