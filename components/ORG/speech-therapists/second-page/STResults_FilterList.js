import { useEffect, useReducer, useState } from "react"
import { useORG_Ctx_filtersLeft } from "../../../../context/ORG_CtxFiltersLeft_Provider"
import { useORG_CtxShowFiltersDesktop } from "../../../../context/ORG_CtxShowFiltersDesktop_Provider"
import { useORG_Ctx_ShowFiltersMobile } from "../../../../context/ORG_Ctx_ShowFiltersMobile"
import { ORG_INITIAL_LEFT_FILTERS } from "../../../../utils/ORG_initialLeftFilters"
import { useWidthWindow1024 } from "../../../../utils/useWidthWindow1024"
import { BtnSmall } from "../../../ui/buttons/general/styles/ButtonStyled"
import { STResults_FiltersContainerDesktop } from "./STResults_FiltersContainerDesktop"
import { STResults_FiltersMobile } from "./mobile/STResults_FiltersMobile"
import { STResults_SortByMobile } from "./mobile/STResults_SortByMobile"
import { STResults_FilterSortbyMobileWrapper } from "./mobile/styles/STResults_FilterSortbyMobileWrapper"
import { STResults_FilterListDesktopWrapper } from "./styles/STResults_FilterListDesktopWrapper.js"
import { STResults_FilterListWrapper } from "./styles/STResults_FilterListWrapper.js"

const reducer = (state, action) => {
  console.log("🔰state:", state)
  console.log("⌛action:", action)
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

export const STResults_FilterList = ({ refUserViewShowFullMapFilter }) => {
  const { filtersLeftContext: filterData, setFiltersLeftContext: setFilterData } = useORG_Ctx_filtersLeft()

  const [state, dispatch] = useReducer(reducer, filterData)
  const [clearAll, setClearAll] = useState(false)
  const [show, setShow] = useState(false)
  const [shouldClear, setShouldClear] = useState(false)

  const [mustShowFiltersDesktop, setMustShowFiltersDesktop] = useState(false)
  const { ORGShowFullMapFilter, setORGShowFullMapFilter, showFullMapButton, setShowFullMapButton } =
    useORG_CtxShowFiltersDesktop()
    
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
        type: { x: "clearAll" },
        payload: [setFilterData, "clearAll"]
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

  return (
    <>
      {isMobile === false ? (
        <STResults_FilterListDesktopWrapper>
          {" "}
          <span onClick={handleShowFiltersDesktop}>
            <BtnSmall secondary>Filter</BtnSmall>
          </span>
          <STResults_FilterListWrapper
            id="topOfSTL"
            mustShowFiltersDesktop={mustShowFiltersDesktop}
            ref={refUserViewShowFullMapFilter}
            ORGShowFullMapFilter={ORGShowFullMapFilter}>
            <STResults_FiltersContainerDesktop
              state={state}
              dispatch={dispatch}
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
