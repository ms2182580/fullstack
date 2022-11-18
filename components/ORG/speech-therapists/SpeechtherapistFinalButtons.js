import { LeftArrowSvg } from "../../../assets/Icons/index.js"
import { PrevButton, SpeechtherapistFinalButtonsWrapper } from "./styles/SpeechtherapistFinalButtonsWrapper.js"

const SpeechtherapistFinalButtons = ({ setPagination, pagination }) => {
  console.log("pagination:", pagination)
  const toPrevious = () => {
    setPagination((prevState) => {
      if (pagination > 1) return pagination - 1
      else return prevState
    })
  }

  return (
    <SpeechtherapistFinalButtonsWrapper>
      <PrevButton onClick={() => toPrevious}>
        <LeftArrowSvg />
        
        <p>Previous</p>
      </PrevButton>
      <button onClick={() => setPagination(1)}>1</button>
      <button onClick={() => setPagination(2)}>2</button>
      <button onClick={() => setPagination(3)}>3</button>
      <button onClick={() => setPagination(pagination + 1)}>Next</button>
    </SpeechtherapistFinalButtonsWrapper>
  )
}

export default SpeechtherapistFinalButtons

/* 
!FH 2


Style buttons
Create the logic for change numbers of buttons when the user is beyond number three
When the user click in the next page, should move to the top of the page

*/
