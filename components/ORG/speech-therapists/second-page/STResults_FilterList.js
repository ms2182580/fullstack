import { useEffect, useReducer, useState } from "react"
import { useORG_Ctx_filtersLeft } from "../../../../context/ORG_CtxFiltersLeft_Provider"
import { useORG_CtxShowFiltersDesktop } from "../../../../context/ORG_CtxShowFiltersDesktop_Provider"
import { useORG_Ctx_FiltersApply } from "../../../../context/ORG_Ctx_FiltersApply"
import { useORG_Ctx_ShowFiltersMobile } from "../../../../context/ORG_Ctx_ShowFiltersMobile"
import { ORG_INITIAL_LEFT_FILTERS } from "../../../../utils/ORG_initialLeftFilters"
import { useShouldTab } from "../../../../utils/ORG_shouldTab"
import { checkTwoObjects } from "../../../../utils/checkTwoObjects"
import { useWidthWindow1024 } from "../../../../utils/useWidthWindow1024"
import { BtnSmall } from "../../../ui/buttons/general/styles/ButtonStyled"
import { STResults_FiltersContainerDesktop } from "./STResults_FiltersContainerDesktop"
import { STResults_FiltersMobile } from "./mobile/STResults_FiltersMobile"
import { STResults_SortByMobile } from "./mobile/STResults_SortByMobile"
import { STResults_FilterSortbyMobileWrapper } from "./mobile/styles/STResults_FilterSortbyMobileWrapper"
import { STResults_FilterListDesktopWrapper } from "./styles/STResults_FilterListDesktopWrapper.js"
import { STResults_FilterListWrapper } from "./styles/STResults_FilterListWrapper.js"

const reducer = (state, action) => {
  const setFilterData = action.payload[0]
  const setTempState = action.payload[1]

  if (action.type === "clearAll") {
    const setFilterAreApply = action.payload[2]
    const setFiltersAppliedNewFilters = action.payload[3]
    const setDefaultWord = action.payload[4]
    const defaultWord = action.payload[5]

    setFilterData(ORG_INITIAL_LEFT_FILTERS)
    setTempState(ORG_INITIAL_LEFT_FILTERS)
    setFilterAreApply(false)
    setFiltersAppliedNewFilters(false)
    setDefaultWord(defaultWord)
    return ORG_INITIAL_LEFT_FILTERS
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
    console.log("💚newFilterDataIsEqual:", newFilterDataIsEqual)

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
    Know how to stop the double render. Right now is patched with this setTimeout for user experience purpose
     */
    setTimeout(() => {
      setMustShowFiltersDesktop(false)
      setORGShowFullMapFilter(false)
      setFilterAreApply(true)
    }, 500)

    return { ...state }
  }
}

export const STResults_FilterList = ({ refUserViewShowFullMapFilter }) => {
  const { filtersLeftContext: filterData, setFiltersLeftContext: setFilterData } = useORG_Ctx_filtersLeft()

  const [state, dispatch] = useReducer(reducer, filterData)
  const [tempState, setTempState] = useState(filterData)
  const [clearAll, setClearAll] = useState(false)
  const [show, setShow] = useState(false)
  const [shouldClear, setShouldClear] = useState(false)

  const [mustShowFiltersDesktop, setMustShowFiltersDesktop] = useState(false)
  const { ORGShowFullMapFilter, setORGShowFullMapFilter, showFullMapButton, setShowFullMapButton } =
    useORG_CtxShowFiltersDesktop()

  const { setFilterAreApply, setFiltersAppliedNewFilters, setDefaultWord, defaultWord } = useORG_Ctx_FiltersApply()

  const handleShowFiltersDesktop = () => {
    setMustShowFiltersDesktop((prevState) => !prevState)
    setORGShowFullMapFilter((prevState) => !prevState)

    if (showFullMapButton) {
      setShowFullMapButton(false)
    }

    if (ORGShowFullMapFilter === false) {
      const targetY = refUserViewShowFullMapFilter.current.getBoundingClientRect().top + window.pageYOffset - 10

      window.scrollTo({ top: targetY })
    }
  }

  const { mustShowFiltersMobile, setMustShowFiltersMobile } = useORG_Ctx_ShowFiltersMobile()
  const { isMobile } = useWidthWindow1024()

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

  useEffect(() => {
    if (isMobile === false) {
      setMustShowFiltersMobile(false)
    }
  }, [isMobile])

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

  const nameToCloseTheFilters = "ShowFiltersDesktop"

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mustShowFiltersDesktop && !event.target.closest(`.${nameToCloseTheFilters}`)) {
        setMustShowFiltersDesktop(false)
        setORGShowFullMapFilter(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [mustShowFiltersDesktop])

  return (
    <>
      {isMobile === false ? (
        <STResults_FilterListDesktopWrapper>
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
          <STResults_FilterListWrapper
            id="topOfSTL"
            mustShowFiltersDesktop={mustShowFiltersDesktop}
            ORGShowFullMapFilter={ORGShowFullMapFilter}
            ref={refUserViewShowFullMapFilter}
            className={nameToCloseTheFilters}>
            <STResults_FiltersContainerDesktop
              state={state}
              dispatch={dispatch}
              tempState={tempState}
              setTempState={setTempState}
              setFilterData={setFilterData}
              clearAll={clearAll}
              setClearAll={setClearAll}
              showStateChildren={setShow}
              shouldClear={shouldClear}
              setShouldClear={setShouldClear}
              handleClearAll={handleClearAll}
              handleShowFilters={handleShowFiltersDesktop}
              title="Filter by"
              mustShowFiltersDesktop={mustShowFiltersDesktop}
              handleAddFilters={handleAddFilters}
              ORGShowFullMapFilter={ORGShowFullMapFilter}
            />
          </STResults_FilterListWrapper>
        </STResults_FilterListDesktopWrapper>
      ) : (
        <>
          {" "}
          <STResults_FilterSortbyMobileWrapper mustShowFiltersMobile={mustShowFiltersMobile}>
            <STResults_FiltersMobile
              dispatch={dispatch}
              setFilterData={setFilterData}
              clearAll={clearAll}
              setClearAll={setClearAll}
              showStateChildren={setShow}
              shouldClear={shouldClear}
              setShouldClear={setShouldClear}
              handleClearAll={handleClearAll}
              isMobile={isMobile}
            />
            <STResults_SortByMobile />
          </STResults_FilterSortbyMobileWrapper>
        </>
      )}
    </>
  )
}
