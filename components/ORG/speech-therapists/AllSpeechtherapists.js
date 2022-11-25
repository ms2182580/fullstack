import { useState } from "react"
import SpeechTherapistListFilter from "./SpeechTherapistListFilter"
import FinalButtons from "./SpeechtherapistFinalButtons"
import STFiltersTherapistsButtonsWrapper from "./styles/AllSpeechtherapistsWrapper"
import { SpeechtherapistList } from "./EverySingleSpeechTherapist"
import { useORG_Ctx_PaginationAndHowMuchShow } from "../../../context/ORG_Ctx_PaginationAndHowMuchShow"
import { useORG_Ctx_UserFetchedAndFilters } from "../../../context/ORG_Ctx_userFetchedAndFilters"
import { useFetch } from "../../../utils/ORG_dummydata_speechtherapists"
import LoadingSpeechTherapists from "./LoadingSpeechTherapists"

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

  const { pagination, howMuchShow, setPagination } =
    useORG_Ctx_PaginationAndHowMuchShow()

  const {
    data: userFetched,
    filters: filtersST,
    setData,
    setFilters
  } = useFetch(
    `https://randomuser.me/api/?results=${howMuchShow}&nat=us&page=${pagination}`
  )
  
  const handleSetData = () => setData()
  const handleSetFilters = () => setFilters()
  // console.log('userFetched:', userFetched)
  // console.log('filtersST:', filtersST)
  
  
  // console.log('setData, setFilters:', setData, setFilters)

  const {
    setUserFetchedDone,
    setFiltersUserFetchedDone,
    userFetchedDone,
    filtersUserFetchedDone
  } = useORG_Ctx_UserFetchedAndFilters()

  // if (userFetched !== undefined && filtersST.length !== 0) {
  //   setUserFetchedDone(userFetched)
  //   setFiltersUserFetchedDone(filtersST)
  // }

  // console.log('userFetched:', userFetched)
  if (userFetched === undefined) {
    return <LoadingSpeechTherapists />
  }

  return (
    <STFiltersTherapistsButtonsWrapper>
      <div>
        <SpeechTherapistListFilter
          setFilterData={setFilterData}
          filterData={filterData}
        />
        <SpeechtherapistList
          filterData={filterData}
          userFetched={userFetched}
          filtersST={filtersST}
          setData={setData}
          setFilters={setFilters}
          handleSetData={handleSetData}
          handleSetFilters={handleSetFilters}
          
          
        />
        <FinalButtons setPagination={setPagination} pagination={pagination} />
      </div>
    </STFiltersTherapistsButtonsWrapper>
  )
}

export default STFiltersTherapistsButtons
