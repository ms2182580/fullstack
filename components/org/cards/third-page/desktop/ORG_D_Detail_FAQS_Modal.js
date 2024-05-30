import { DATA_ORG_D_TYPES_KEYS } from "@/utils/org/DATA_ORG_D"
import { useRouter } from "next/router.js"
import { useState } from "react"
import { ButtonSmall } from "../../../../ui/buttons/general/index"
import { Caption } from "../../../../ui/heading_body_text/DesktopMobileFonts"
import { H4 } from "../../../../ui/heading_body_text/HeaderFonts"
import { ORG_D_Detail_FAQS_ModalWrapper } from "./styles/ORG_D_Detail_FAQS_ModalWrapper.js"

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

  const { query } = useRouter()

  return (
    <ORG_D_Detail_FAQS_ModalWrapper
      isBackend={Boolean(query[DATA_ORG_D_TYPES_KEYS.IS_FROM_BACKEND])}
    >
      <H4 hover>Question</H4>
      {Boolean(query[DATA_ORG_D_TYPES_KEYS.IS_FROM_BACKEND]) ? (
        <>
          <div>
            <Caption>
              Got a question about {name} {lastName} SLP? Ask the Inclusive
              community!
            </Caption>
            <textarea
              value={newQuestion}
              onChange={handleNewQuestion}
              placeholder={`What would you like to know about ${name} ${lastName}, CCC-SLP?`}
              tabIndex={0}
            />
          </div>
        </>
      ) : null}

      <span onClick={handleAddQuestion}>
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
