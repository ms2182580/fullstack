import { useEffect, useReducer, useState } from "react"
import { useORG_Ctx_filtersLeft } from "../../../context/ORG_CtxFiltersLeft_Provider.js"
import { useORG_Ctx_ShowFiltersMobile } from "../../../context/ORG_Ctx_ShowFiltersMobile.js"
import { ORG_INITIAL_LEFT_FILTERS } from "../../../utils/ORG_initialLeftFilters.js"
import { useWidthWindow1024 } from "../../../utils/useWidthWindow1024.js"
import { BtnSmall } from "../../ui/buttons/general/styles/ButtonStyled.js"
import { ActualFilters } from "./ActualFilters.js"
import SpeechTherapistListFilterWrapper from "./styles/SpeechTherapistListFilterWrapper.js"

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

const SpeechTherapistListFilter = () => {
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
            </>
          )}
        </>
      ) : (
        <></>
      )}
    </>
  )
}

export default SpeechTherapistListFilter
