import { useEffect, useReducer, useState } from "react"
import { useCtx_ShowModal } from "../../../../../context/Ctx_ShowModal.js"
import { useORG_Ctx_FetchWithFiltersDesktop } from "../../../../../context/ORG_CtxFetchWithFiltersDesktop_Provider"
import { useORG_Ctx_filtersLeftDesktop } from "../../../../../context/ORG_CtxFiltersLeftDesktop_Provider"
import { useORG_CtxShowFiltersDesktop } from "../../../../../context/ORG_CtxShowFiltersDesktop_Provider"
import { useORG_Ctx_FiltersApplyDesktop } from "../../../../../context/ORG_Ctx_FiltersApplyDesktop"
import { ORG_INITIAL_VALUES_FILTERS_D } from "../../../../../utils/ORG_initialValuesFilters"
import { useShouldTab } from "../../../../../utils/ORG_shouldTab"
import { checkTwoObjects } from "../../../../../utils/checkTwoObjects"
import { BtnSmall } from "../../../../ui/buttons/general/styles/ButtonStyled"
import { ST_D_Results_FiltersContainer } from "./ST_D_Results_FiltersContainer"
import { ST_D_Results_FilterListChildWrapper } from "./styles/ST_D_Results_FilterListChildWrapper.js"
import { ST_D_Results_FilterListMainWrapper } from "./styles/ST_D_Results_FilterListMainWrapper"

const reducer = (state, action) => {
  const setFilterData = action.payload[0]
  const setTempState = action.payload[1]

  if (action.type === "clearAll") {
    const setFilterAreApply = action.payload[2]
    const setFiltersAppliedNewFilters = action.payload[3]
    const setDefaultWord = action.payload[4]
    const defaultWord = action.payload[5]

    setFilterData(ORG_INITIAL_VALUES_FILTERS_D)
    setTempState(ORG_INITIAL_VALUES_FILTERS_D)
    setFilterAreApply(false)
    setFiltersAppliedNewFilters(false)
    setDefaultWord(defaultWord)
    return ORG_INITIAL_VALUES_FILTERS_D
  }

  if (action.type === "addFilters") {
    const tempState = action.payload[2]
    const setMustShowFiltersDesktop = action.payload[3]
    const setORGShowFullMapFilter = action.payload[4]
    const setFilterAreApply = action.payload[5]

    setFilterData(tempState)

    const filterData = action.payload[6]
    const setFiltersAppliedNewFilters = action.payload[7]

    const newFilterDataIsEqual = checkTwoObjects(filterData, tempState)

    const setDefaultWord = action.payload[8]
    const defaultWord = action.payload[9]

    if (newFilterDataIsEqual) {
      setFiltersAppliedNewFilters(false)
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
      setMustShowFiltersDesktop(false)
      setORGShowFullMapFilter(false)
      setFilterAreApply(true)
    }, 500)

    return { ...state }
  }
}
const nameToCloseTheFilters = "ShowFiltersDesktop"

export const ST_D_Results_FilterList = ({ refUserViewShowFullMapFilter }) => {
  const { filtersLeftContext: filterData, setFiltersLeftContext: setFilterData } = useORG_Ctx_filtersLeftDesktop()

  /* 
  !FH
  The problem is the "setFiltersLeftContext" that is making re renders to the context provider "ORG_CtxFiltersLeft_Provider"
  */


  const [state, dispatch] = useReducer(reducer, filterData)
  const [tempState, setTempState] = useState(filterData)
  const [clearAll, setClearAll] = useState(false)
  const [show, setShow] = useState(false)
  const [shouldClear, setShouldClear] = useState(false)

  const [mustShowFiltersDesktop, setMustShowFiltersDesktop] = useState(false)
  const { ORGShowFullMapFilter, setORGShowFullMapFilter, ORGshowFullMapButton, setORGShowFullMapButton } =
    useORG_CtxShowFiltersDesktop()

  const { setFilterAreApply, setFiltersAppliedNewFilters, setDefaultWord, defaultWord } =
    useORG_Ctx_FiltersApplyDesktop()

  const { modalShowedCtx, setModalShowedCtx } = useCtx_ShowModal()

  const handleShowFiltersDesktop = () => {
    setMustShowFiltersDesktop((prevState) => !prevState)
    setORGShowFullMapFilter((prevState) => !prevState)
    setModalShowedCtx((prevState) => !prevState)

    if (ORGshowFullMapButton) {
      setORGShowFullMapButton(false)
    }

    if (ORGShowFullMapFilter === false) {
      const targetY = refUserViewShowFullMapFilter.current.getBoundingClientRect().top + window.pageYOffset - 10

      window.scrollTo({ top: targetY })
    }
  }

  const handleClearAll = (e) => {
    if (e.type === "click" || e.key === "Enter" || e === "from useEffect") {
      setShouldClear((prevState) => !prevState)
      if (show) {
        setClearAll(true)
      }

      dispatch({
        type: "clearAll",
        payload: [
          setFilterData,
          setTempState,
          setFilterAreApply,
          setFiltersAppliedNewFilters,
          setDefaultWord,
          defaultWord
        ]
      })
    }
  }

  useEffect(() => {
    handleClearAll("from useEffect")
  }, [])

  const { shouldFetchDesktopFilters, setShouldFetchDesktopFilters } = useORG_Ctx_FetchWithFiltersDesktop()

  useEffect(() => {
    /* 
    !FH
    The idea is fetch only if the user click on "addFilters"
    */
    setShouldFetchDesktopFilters(true)
  }, [])

  const handleAddFilters = (e) => {
    if (e.type === "click" || e.key === "Enter") {
      return dispatch({
        type: "addFilters",
        payload: [
          setFilterData,
          setTempState,
          tempState,
          setMustShowFiltersDesktop,
          setORGShowFullMapFilter,
          setFilterAreApply,
          filterData,
          setFiltersAppliedNewFilters,
          setDefaultWord,
          defaultWord
        ]
      })
    }
  }

  const shouldTab = useShouldTab()

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mustShowFiltersDesktop && !event.target.closest(`.${nameToCloseTheFilters}`)) {
        setMustShowFiltersDesktop(false)
        setORGShowFullMapFilter(false)
        setModalShowedCtx(false)

      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [mustShowFiltersDesktop])

  return (
    <>
      <ST_D_Results_FilterListMainWrapper>
        {" "}
        <span
          onClick={handleShowFiltersDesktop}
          tabIndex={-1}>
          <BtnSmall
            secondary
            tabIndex={shouldTab}>
            Filter
          </BtnSmall>
        </span>
        <ST_D_Results_FilterListChildWrapper
          // id="topOfSTL"
          mustShowFiltersDesktop={mustShowFiltersDesktop}
          ORGShowFullMapFilter={ORGShowFullMapFilter}
          ref={refUserViewShowFullMapFilter}
          className={nameToCloseTheFilters}>
          <ST_D_Results_FiltersContainer
            clearAll={clearAll}
            dispatch={dispatch}
            handleAddFilters={handleAddFilters}
            handleClearAll={handleClearAll}
            handleShowFilters={handleShowFiltersDesktop}
            setClearAll={setClearAll}
            setFilterData={setFilterData}
            setShouldClear={setShouldClear}
            setTempState={setTempState}
            shouldClear={shouldClear}
            showStateChildren={setShow}
            tempState={tempState}
            title="Filter by"
          />
        </ST_D_Results_FilterListChildWrapper>
      </ST_D_Results_FilterListMainWrapper>
    </>
  )
}
