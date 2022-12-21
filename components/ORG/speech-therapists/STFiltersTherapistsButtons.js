import SpeechTherapistListFilter from "./SpeechTherapistListFilter"
import { SpeechtherapistFinalButtons } from "./SpeechtherapistFinalButtons"
import STFiltersTherapistsButtonsWrapper from "./styles/AllSpeechtherapistsWrapper"
import { SpeechtherapistList } from "./EverySingleSpeechTherapist"

const STFiltersTherapistsButtons = () => {
  return (
    <STFiltersTherapistsButtonsWrapper>
      <SpeechTherapistListFilter />

      <SpeechtherapistList />

      <SpeechtherapistFinalButtons />
    </STFiltersTherapistsButtonsWrapper>
  )
}

export default STFiltersTherapistsButtons