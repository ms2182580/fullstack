import { useState } from "react"
import SpeechTherapistListFilter from "./SpeechTherapistListFilter"
import {SpeechtherapistFinalButtons} from "./SpeechtherapistFinalButtons"
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
      <div>
        <SpeechTherapistListFilter
          setFilterData={setFilterData}
          filterData={filterData}
        />

        <SpeechtherapistList filterData={filterData} />

        <SpeechtherapistFinalButtons />
      </div>
    </STFiltersTherapistsButtonsWrapper>
  )
}

export default STFiltersTherapistsButtons
