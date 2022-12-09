import { useState } from "react"
import SpeechTherapistListFilter from "./SpeechTherapistListFilter"
import { SpeechtherapistFinalButtons } from "./SpeechtherapistFinalButtons"
import STFiltersTherapistsButtonsWrapper from "./styles/AllSpeechtherapistsWrapper"
import { SpeechtherapistList } from "./EverySingleSpeechTherapist"
import { ORG_INITIAL_LEFT_FILTERS } from "../../../utils/ORG_initialLeftFilters"

const STFiltersTherapistsButtons = () => {
  const [filterData, setFilterData] = useState(ORG_INITIAL_LEFT_FILTERS)

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
