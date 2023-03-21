import { Fragment, useEffect, useState } from "react"
import { DownArrowSvg, StartEmptySvg, StartFullSvg, UpArrowSvg } from "../../../../assets/Icons/index.js"
import { P } from "../../../ui/heading_body_text/DesktopMobileFonts.js"
import { STResults_FilterCheckboxInput } from "./STResults_FilterCheckboxInput.js"
import {
  StarsWrapper,
  STResults_FilterCheckboxContainerUL,
  STResults_FilterCheckboxContainerWrapper
} from "./styles/STResults_FilterCheckboxContainerWrapper.js"

export const STResults_FilterCheckboxContainer = ({
  dispatch,
  setFilterData,
  categoriesToDisplay = ["nothing here"],
  title,
  toUpdate = undefined,
  clearAll,
  setClearAll,
  showStateChildren,
  shouldClear,
  setShouldClear,
  isMobile = false
}) => {
  let toUpdateFilters = toUpdate === undefined ? title.toLowerCase() : toUpdate
  const [show, setShow] = useState(false)

  const handleShow = (e) => {
    if (e.type === "click" || e.key === "Enter") {
      setShow(!show)
    }
  }

  useEffect(() => {
    setShow(false)
  }, [clearAll])

  useEffect(() => {
    setClearAll(false)
    showStateChildren(show)
  }, [show])

  /* 
  !FH
  
  Add tabIndex and make it work
  */

  return (
    <STResults_FilterCheckboxContainerWrapper isMobile={isMobile}>
      <div
        tabIndex={0}
        onKeyDown={(e) => handleShow(e)}>
        <P>{title}</P>
        <span onClick={handleShow}>{show ? <UpArrowSvg /> : <DownArrowSvg />}</span>
      </div>

      <STResults_FilterCheckboxContainerUL show={show}>
        {title.toLowerCase() === "rating"
          ? categoriesToDisplay?.map((x) => {
              let ratingPattern = Array(5)
                .fill(0)
                .map((xMap, i) => {
                  if (x - 1 < i) {
                    return "empty"
                  }
                  return "fully"
                })
              return (
                <li
                  key={x}
                  tabIndex={0}>
                  <label>
                    <StarsWrapper>
                      {ratingPattern.map((x, i) => {
                        if (x === "fully") {
                          return (
                            <Fragment key={`${x}${i}`}>
                              <StartFullSvg />
                            </Fragment>
                          )
                        } else {
                          return (
                            <Fragment key={`${x}${i}`}>
                              <StartEmptySvg />
                            </Fragment>
                          )
                        }
                      })}
                    </StarsWrapper>

                    <STResults_FilterCheckboxInput
                      type="checkbox"
                      name={x}
                      dispatch={dispatch}
                      setFilterData={setFilterData}
                      toUpdateFilters={toUpdateFilters}
                      clearAll={clearAll}
                    />
                    <span></span>
                  </label>
                </li>
              )
            })
          : title.toLowerCase() === "distance"
          ? categoriesToDisplay?.map((x) => {
              return (
                <li key={x}>
                  <label>
                    <P>{x} miles</P>
                    <STResults_FilterCheckboxInput
                      type="checkbox"
                      name={x}
                      dispatch={dispatch}
                      setFilterData={setFilterData}
                      toUpdateFilters={toUpdateFilters}
                      clearAll={clearAll}
                    />

                    <span></span>
                  </label>
                </li>
              )
            })
          : categoriesToDisplay?.map((x) => {
              return (
                <li key={x}>
                  <label>
                    <P>{x}</P>
                    <STResults_FilterCheckboxInput
                      type="checkbox"
                      name={x}
                      dispatch={dispatch}
                      setFilterData={setFilterData}
                      toUpdateFilters={toUpdateFilters}
                      clearAll={clearAll}
                    />
                    <span></span>
                  </label>
                </li>
              )
            })}
      </STResults_FilterCheckboxContainerUL>
    </STResults_FilterCheckboxContainerWrapper>
  )
}
