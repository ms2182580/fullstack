import { useReducer, useState } from "react"
import SpeechTherapistListFilterWrapper from "./styles/SpeechTherapistListFilterWrapper.js"
import { ORG_INITIAL_LEFT_FILTERS } from "../../../utils/ORG_initialLeftFilters.js"
import { useORG_Ctx_filtersLeft } from "../../../context/ORG_CtxFiltersLeft_Provider.js"
import { useEffect } from "react"
import { SortByMobile } from "./SortByMobile.js"
import { STFilterSortbyMobileWrapper } from "./styles/STFilterSortbyMobileWrapper.js"
import { FiltersMobile } from "./FiltersMobile.js"
import { ActualFilters } from "./ActualFilters.js"
import { useORG_Ctx_ShowFiltersMobile } from "../../../context/ORG_Ctx_ShowFiltersMobile.js"

const reducer = (state, action) => {
  const setFilterData = action.payload[0]
  const toUpdateFilters = action.payload[2]

  if (action.payload[1] === "clearAll") {
    setFilterData(ORG_INITIAL_LEFT_FILTERS)
    return state
  }

  if (action.payload[1].target.checked) {
    setFilterData((prevStatus) => {
      return {
        ...prevStatus,
        [toUpdateFilters]: [...prevStatus[toUpdateFilters], action.type.x]
      }
    })
  } else {
    setFilterData((prevStatus) => {
      let shouldStay = prevStatus[toUpdateFilters].filter((x) => x !== action.type.x)

      return {
        ...prevStatus,
        [toUpdateFilters]: [...shouldStay]
      }
    })
  }
}

const SpeechTherapistListFilter = ({ widthWindow }) => {
  const { filtersLeftContext: filterData, setFiltersLeftContext: setFilterData } = useORG_Ctx_filtersLeft()
  const [state, dispatch] = useReducer(reducer, filterData)
  const [clearAll, setClearAll] = useState(false)
  const [show, setShow] = useState(false)
  const [shouldClear, setShouldClear] = useState(false)

  const { mustShowFiltersMobile, setMustShowFiltersMobile } = useORG_Ctx_ShowFiltersMobile()

  const handleClearAll = (e) => {
    if (e.type === "click" || e.key === "Enter" || e === "from useEffect") {
      setShouldClear((prevState) => !prevState)
      if (show) {
        setClearAll(true)
      }

      dispatch({
        type: { x: "clearAll" },
        payload: [setFilterData, "clearAll"]
      })
    }
  }

  useEffect(() => {
    handleClearAll("from useEffect")
  }, [])

  useEffect(() => {
    if (widthWindow >= 768) {
      setMustShowFiltersMobile(false)
    }
  }, [widthWindow])

  return (
    <>
      {widthWindow > 768 ? (
        <SpeechTherapistListFilterWrapper id="topOfSTL">
          <ActualFilters
            dispatch={dispatch}
            setFilterData={setFilterData}
            clearAll={clearAll}
            setClearAll={setClearAll}
            showStateChildren={setShow}
            shouldClear={shouldClear}
            setShouldClear={setShouldClear}
            handleClearAll={handleClearAll}
            title="Filter by"
          />
        </SpeechTherapistListFilterWrapper>
      ) : (
        <STFilterSortbyMobileWrapper mustShowFiltersMobile={mustShowFiltersMobile}>
          <FiltersMobile
            dispatch={dispatch}
            setFilterData={setFilterData}
            clearAll={clearAll}
            setClearAll={setClearAll}
            showStateChildren={setShow}
            shouldClear={shouldClear}
            setShouldClear={setShouldClear}
            handleClearAll={handleClearAll}
          />
          <SortByMobile />
        </STFilterSortbyMobileWrapper>
      )}
    </>
  )
}

export default SpeechTherapistListFilter
