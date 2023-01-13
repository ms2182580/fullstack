import SpeechTherapistListFilter from "./SpeechTherapistListFilter"
import { SpeechtherapistFinalButtons } from "./SpeechtherapistFinalButtons"
import STFiltersTherapistsButtonsWrapper from "./styles/AllSpeechtherapistsWrapper"
import { SpeechtherapistList } from "./EverySingleSpeechTherapist"

const STFiltersTherapistsButtons = ({widthWindow}) => {
  return (
    <STFiltersTherapistsButtonsWrapper>
      <SpeechTherapistListFilter widthWindow={widthWindow}/>

      <SpeechtherapistList widthWindow={widthWindow}/>

      <SpeechtherapistFinalButtons widthWindow={widthWindow}/>
    </STFiltersTherapistsButtonsWrapper>
  )
}

export default STFiltersTherapistsButtons