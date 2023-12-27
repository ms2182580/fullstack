import { useEffect, useReducer, useState } from "react"
import { ORG_STSearch_M_FilterIcon } from "../../../../../../../assets/icons2/index.js"
import { useORG_Ctx_FetchWithFiltersMobile } from "../../../../../../../context/ORG_CtxFetchWithFiltersMobile_Provider"
import { useORG_Ctx_filtersLeftMobile } from "../../../../../../../context/ORG_CtxFiltersLeftMobile_Provider.js"
import { useORG_Ctx_FiltersApplyMobile } from "../../../../../../../context/ORG_Ctx_FiltersApplyMobile"
import { useORG_Ctx_ShowFiltersMobile } from "../../../../../../../context/ORG_Ctx_ShowFiltersMobile_Provider.js"
import { ORG_INITIAL_VALUES_FILTERS_M } from "../../../../../../../utils/ORG_initialValuesFilters.js"
import { checkTwoObjects } from "../../../../../../../utils/checkTwoObjects.js"
import { Caption } from "../../../../../../ui/heading_body_text/DesktopMobileFonts"
import { ST_M_Results_FiltersContainer } from "./ST_M_Results_FiltersContainer.js"
import { ST_M_Results_FilterListMainWrapper } from "./styles/ST_M_Results_FilterListMainWrapper.js"

const reducer = (state, action) => {
  const setFilterData = action.payload[0]
  const setTempState = action.payload[1]

  if (action.type === "clearAll") {
    const setFilterAreApply = action.payload[2]
    const setFiltersAppliedNewFilters = action.payload[3]
    const setDefaultWord = action.payload[4]
    const defaultWord = action.payload[5]
    const setMustShowFiltersMobile = action.payload[6]

    setFilterData(ORG_INITIAL_VALUES_FILTERS_M)
    setTempState(ORG_INITIAL_VALUES_FILTERS_M)
    setFilterAreApply(false)
    setFiltersAppliedNewFilters(false)
    setDefaultWord(defaultWord)
    setMustShowFiltersMobile(false)
    return ORG_INITIAL_VALUES_FILTERS_M
  }

  if (action.type === "addFilters") {
    const tempState = action.payload[2]
    const setMustShowFiltersMobile = action.payload[3]
    const setFilterAreApply = action.payload[4]

    setFilterData(tempState)

    const filterData = action.payload[5]
    const setFiltersAppliedNewFilters = action.payload[6]

    const newFilterDataIsEqual = checkTwoObjects(filterData, tempState)

    const setDefaultWord = action.payload[7]
    const defaultWord = action.payload[8]

    if (newFilterDataIsEqual) {
      setMustShowFiltersMobile(false)
      setDefaultWord(defaultWord)
    } else {
      setFiltersAppliedNewFilters(true)
    }

    /* 
    !FH
    Know how to stop the double render. Right now is patched with this setTimeout for user experience purpose.
    
    Try to use useCallback hook to fic this
     */

    setTimeout(() => {
      setMustShowFiltersMobile(false)
      setFilterAreApply(true)
    }, 500)

    return { ...state }
  }
}

export const ST_M_Results_FilterList = () => {
  const { filtersLeftContext: filterData, setFiltersLeftContext: setFilterData } = useORG_Ctx_filtersLeftMobile()

  /* 
  !FH
  The problem is the "setFiltersLeftContext" that is making re renders to the context provider "ORG_CtxFiltersLeft_Provider"
  
  */

  const [state, dispatch] = useReducer(reducer, filterData)
  const [tempState, setTempState] = useState(filterData)
  const [clearAll, setClearAll] = useState(false)
  const [show, setShow] = useState(false)
  const [shouldClear, setShouldClear] = useState(false)

  const { mustShowFiltersMobile, setMustShowFiltersMobile } = useORG_Ctx_ShowFiltersMobile()

  const { setFilterAreApply, setFiltersAppliedNewFilters, setDefaultWord, defaultWord } = useORG_Ctx_FiltersApplyMobile()

  const handleClearAll = (e) => {
    if (e.type === "click" || e.key === "Enter" || e === "from useEffect") {
      setShouldClear((prevState) => !prevState)
      if (show) {
        setClearAll(true)
      }

      dispatch({
        type: "clearAll",
        payload: [setFilterData, setTempState, setFilterAreApply, setFiltersAppliedNewFilters, setDefaultWord, defaultWord, setMustShowFiltersMobile],
      })
    }
  }

  useEffect(() => {
    handleClearAll("from useEffect")
  }, [])

  const { setShouldFetchMobileWithFilters } = useORG_Ctx_FetchWithFiltersMobile()

  useEffect(() => {
    setShouldFetchMobileWithFilters(true)
  }, [])

  const handleAddFilters = (e) => {
    if (e.type === "click" || e.key === "Enter") {
      dispatch({
        type: "addFilters",
        payload: [
          setFilterData,
          setTempState,
          tempState,
          setMustShowFiltersMobile,
          setFilterAreApply,
          filterData,
          setFiltersAppliedNewFilters,
          setDefaultWord,
          defaultWord,
          setShouldFetchMobileWithFilters,
        ],
      })
    }
  }

  const handleShowFiltersMobile = () => {
    setMustShowFiltersMobile((prevState) => !prevState)
  }

  useEffect(() => {
    if (!mustShowFiltersMobile) {
      window.scrollTo({ top: 0 })
    }
  }, [mustShowFiltersMobile])

  return (
    <>
      <ST_M_Results_FilterListMainWrapper>
        {" "}
        <span
          onClick={handleShowFiltersMobile}
          tabIndex={-1}>
          <Caption
            bolder
            primary_cta>
            Advanced Filters
          </Caption>
          <ORG_STSearch_M_FilterIcon />
        </span>
        <ST_M_Results_FiltersContainer
          clearAll={clearAll}
          dispatch={dispatch}
          handleAddFilters={handleAddFilters}
          handleClearAll={handleClearAll}
          handleShowFilters={handleShowFiltersMobile}
          mustShowFiltersMobile={mustShowFiltersMobile}
          setClearAll={handleShowFiltersMobile}
          setFilterData={setFilterData}
          setShouldClear={setShouldClear}
          setTempState={setTempState}
          shouldClear={shouldClear}
          showStateChildren={setShow}
          tempState={tempState}
        />
      </ST_M_Results_FilterListMainWrapper>
    </>
  )
}
