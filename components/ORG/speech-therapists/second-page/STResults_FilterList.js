import { useEffect, useReducer, useState } from "react"
import { useORG_Ctx_filtersLeft } from "../../../../context/ORG_CtxFiltersLeft_Provider"
import { BtnSmall } from "../../../ui/buttons/general/styles/ButtonStyled"
import { STResults_FiltersMobile } from "./mobile/STResults_FiltersMobile"
import { STResults_SortByMobile } from "./mobile/STResults_SortByMobile"
import { STResults_FilterSortbyMobileWrapper } from "./mobile/styles/STResults_FilterSortbyMobileWrapper"
import { STResults_FilterCheckboxContainer } from "./STResults_FilterCheckboxContainer"
import { STResults_FiltersContainerWrapper } from "./styles/STResults_FiltersContainerWrapper"

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

export const STResults_FilterList = () => {
  const { filtersLeftContext: filterData, setFiltersLeftContext: setFilterData } = useORG_Ctx_filtersLeft()
  const [state, dispatch] = useReducer(reducer, filterData)
  const [clearAll, setClearAll] = useState(false)
  const [show, setShow] = useState(false)
  const [shouldClear, setShouldClear] = useState(false)

  const [mustShowFiltersDesktop, setMustShowFiltersDesktop] = useState(false)
  const handleShowFiltersDesktop = () => {
    setMustShowFiltersDesktop((prevState) => !prevState)
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
        <>
          {" "}
          <span onClick={handleShowFiltersDesktop}>
            <BtnSmall secondary>Filter</BtnSmall>
          </span>
          {mustShowFiltersDesktop && (
            <>
              <STResults_FiltersContainerWrapper id="topOfSTL">
                <STResults_FilterCheckboxContainer
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
              </STResults_FiltersContainerWrapper>
            </>
          )}
        </>
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
            />
            <STResults_SortByMobile />
          </STResults_FilterSortbyMobileWrapper>
        </>
      )}
    </>
  )
}

