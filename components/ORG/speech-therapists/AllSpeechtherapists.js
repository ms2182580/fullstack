import { useState } from "react"
import SpeechTherapistListFilter from "./SpeechTherapistListFilter"
import { SpeechtherapistFinalButtons } from "./SpeechtherapistFinalButtons"
import STFiltersTherapistsButtonsWrapper from "./styles/AllSpeechtherapistsWrapper"
import { SpeechtherapistList } from "./EverySingleSpeechTherapist"

const STFiltersTherapistsButtons = () => {
  const [filterData, setFilterData] = useState({
    distance: [],
    rating: [],
    diagnoses: [],
    agesServed: [],
    languages: [],
    yearsOfPractice: [],
    serviceSetting: [],
    accepts: [],
    meetingFormat: [],
    sessionType: [],
    transportation: [],
    providerType: []
  })

  return (
    <STFiltersTherapistsButtonsWrapper>
      <SpeechTherapistListFilter
        setFilterData={setFilterData}
        filterData={filterData}
      />

      <SpeechtherapistList
        filterData={filterData}
        setFilterData={setFilterData}
      />

      <SpeechtherapistFinalButtons />
    </STFiltersTherapistsButtonsWrapper>
  )
}

export default STFiltersTherapistsButtons
