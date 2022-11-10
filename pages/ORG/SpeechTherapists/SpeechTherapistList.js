import { useState } from "react"
import { useFetch } from "../../../utils/ORG_dummydata_speechtherapists"
import SpeechTherapistListWrapper from "./styles/SpeechTherapistList"
import { SpeechtherapistList } from "../../../components/ORG/speech-therapist-list/RepeatedInformation"
import { ORG_Filterdata_Distance } from "../../../utils/ORG_Filterdata"
import SpeechTherapistListFilter from "./SpeechTherapistListFilter"
import FinalButtons from "./FinalButtons"
import { useEffect } from "react"

const SpeechTherapistList = () => {
  const [pagination, setPagination] = useState(1)

  const { data: userFetched } = useFetch(
    "https://randomuser.me/api/?results=5&nat=us&page=",
    pagination
  )
  
  const [filterData, setFilterData] = useState({
    distance: [],
    rating: [],
    diagnoses: [],
    agesServed: [],
    languages: [],
    yearsOfPractice: [],
    serviceSetting: [],
    accepts: [],
    meetingFormat:[],
    sessionType: [],
    transportation: [],
    providerType: []
  })

  return (
    <SpeechTherapistListWrapper>
      <SpeechTherapistListFilter
        setFilterData={setFilterData}
        filterData={filterData}
      />

      <SpeechtherapistList
        userFetched={userFetched}
        ORG_Filterdata_Distance={ORG_Filterdata_Distance}
        filterData={filterData}
      />

      {/* <RepeatedInformation userFetched={userFetched} /> */}

      <FinalButtons setPagination={setPagination} pagination={pagination} />
    </SpeechTherapistListWrapper>
  )
}

export default SpeechTherapistList
