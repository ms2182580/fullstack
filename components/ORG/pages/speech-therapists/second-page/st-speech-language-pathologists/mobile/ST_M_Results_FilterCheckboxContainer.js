import { useEffect, useState } from "react"
import { DownArrowSvg, UpArrowSvg } from "../../../../../../../assets/Icons/index.js"
import { ORG_FILTERS_KEYS_M } from "../../../../../../../utils/ORG_FiltersCategories.js"
import { P } from "../../../../../../ui/heading_body_text/DesktopMobileFonts.js"
import { PatternStars } from "../../../../../stars-rating-review/PatternsStars.js"
import { ST_M_Results_FilterCheckboxInput } from "./ST_M_Results_FilterCheckboxInput.js"
import {
  ST_M_Results_FilterCheckboxContainerULWrapper,
  ST_M_Results_FilterCheckboxContainerWrapper
} from "./styles/ST_M_Results_FilterCheckboxContainerWrapper.js"

export const ST_M_Results_FilterCheckboxContainer = ({
  categoriesToDisplay = ["nothing here"],
  clearAll,
  dispatch,
  mustShowFiltersMobile,
  setClearAll,
  setFilterData,
  setTempState,
  shouldClear,
  showStateChildren,
  tempState,
  title,
  toUpdateFilters
}) => {
  const [show, setShow] = useState(false)
  const [showIndividual, setShowIndividual] = useState(false)

  const handleShow = (e) => {
    if (e.type === "click" || e.key === "Enter") {
      setShow((prevState) => !prevState)
    }
  }

  const handleShowIndividual = (e) => {
    if (e.type === "click" || e.key === "Enter") {
      setShowIndividual((prevState) => !prevState)
    }
  }

  useEffect(() => {
    setShow(false)
  }, [clearAll])

  useEffect(() => {
    setClearAll(false)
    showStateChildren(show)
  }, [show])

  useEffect(() => {
    if (!mustShowFiltersMobile) {
      setShowIndividual(false)
    }
  }, [mustShowFiltersMobile])

  /* 
  !FH
  Add tabIndex and make it work with enter key
  */

  return (
    <ST_M_Results_FilterCheckboxContainerWrapper>
      <div
        tabIndex={0}
        onKeyDown={(e) => handleShow(e)}
        onClick={(e) => handleShowIndividual(e)}>
        <P semibold>{title}</P>

        {showIndividual ? <UpArrowSvg /> : <DownArrowSvg />}
      </div>

      <ST_M_Results_FilterCheckboxContainerULWrapper showIndividual={showIndividual}>
        {categoriesToDisplay?.map((x, i) => {
          if (title === ORG_FILTERS_KEYS_M.distance.titleToShow) {
            return (
              <li key={x}>
                <label>
                  <P>{x} miles</P>
                  <ST_M_Results_FilterCheckboxInput
                    type="checkbox"
                    name={x}
                    dispatch={dispatch}
                    tempState={tempState}
                    setTempState={setTempState}
                    setFilterData={setFilterData}
                    toUpdateFilters={toUpdateFilters}
                    clearAll={clearAll}
                    shouldClear={shouldClear}
                  />
                  <span></span>
                </label>
              </li>
            )
          }

          if (title === ORG_FILTERS_KEYS_M.rating.titleToShow) {
            return (
              <li key={x}>
                <label>
                  <PatternStars rating={i + 1} />
                  <ST_M_Results_FilterCheckboxInput
                    type="checkbox"
                    name={x}
                    dispatch={dispatch}
                    tempState={tempState}
                    setTempState={setTempState}
                    setFilterData={setFilterData}
                    toUpdateFilters={toUpdateFilters}
                    clearAll={clearAll}
                    shouldClear={shouldClear}
                  />
                  <span></span>
                </label>
              </li>
            )
          }

          return (
            <li key={x}>
              <label>
                <P>{x}</P>
                <ST_M_Results_FilterCheckboxInput
                  type="checkbox"
                  name={x}
                  dispatch={dispatch}
                  tempState={tempState}
                  setTempState={setTempState}
                  setFilterData={setFilterData}
                  toUpdateFilters={toUpdateFilters}
                  clearAll={clearAll}
                  shouldClear={shouldClear}
                />
                <span></span>
              </label>
            </li>
          )
        })}
      </ST_M_Results_FilterCheckboxContainerULWrapper>
    </ST_M_Results_FilterCheckboxContainerWrapper>
  )
}
