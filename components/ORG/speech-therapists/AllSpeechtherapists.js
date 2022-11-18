import { useState } from "react"
import SpeechTherapistListFilter from "./SpeechTherapistListFilter"
import FinalButtons from "./SpeechtherapistFinalButtons"
import STFiltersTherapistsButtonsWrapper from "./styles/AllSpeechtherapistsWrapper"
import { SpeechtherapistList } from "./EverySingleSpeechTherapist"

const STFiltersTherapistsButtons = ({
  userFetched,
  filtersST,
  pagination,
  setPagination
}) => {
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

        <SpeechtherapistList
          userFetched={userFetched}
          filtersST={filtersST}
          filterData={filterData}
        />

        <FinalButtons setPagination={setPagination} pagination={pagination} />
      </div>
    </STFiltersTherapistsButtonsWrapper>
  )
}

export default STFiltersTherapistsButtons
