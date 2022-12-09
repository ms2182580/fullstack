import { Fragment } from "react"
import { useEffect, useState } from "react"
import {
  DownArrowSvg,
  StartEmptySvg,
  StartFullSvg,
  UpArrowSvg
} from "../../../assets/Icons/index.js"
import { P } from "../../ui/heading_body_text/DesktopMobileFonts.js"
import { CustomCheckboxInput } from "./CustomCheckboxInput.js"
import FilterCheckboxComponentWrapper, {
  FilterCheckboxComponent_UL,
  StarsWrapper
} from "./styles/FilterCheckboxComponentWrapper.js"

const FilterCheckboxComponent = ({
  dispatch,
  setFilterData,
  categoriesToDisplay = ["nothing here"],
  title,
  toUpdate = undefined,
  clearAll,
  setClearAll,
  showStateChildren,
  shouldClear,
  setShouldClear
}) => {
  let toUpdateFilters = toUpdate === undefined ? title.toLowerCase() : toUpdate
  const [show, setShow] = useState(false)

  const handleShow = () => {
    setShow(!show)
  }

  useEffect(() => {
    setShow(false)
  }, [clearAll])

  useEffect(() => {
    setClearAll(false)
    showStateChildren(show)
  }, [show])

  return (
    <>
      <FilterCheckboxComponentWrapper>
        <div>
          <P>{title}</P>
          <span onClick={handleShow}>
            {show ? <UpArrowSvg /> : <DownArrowSvg />}
          </span>
        </div>

        <FilterCheckboxComponent_UL show={show}>
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
                  <li key={x}>
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

                      <CustomCheckboxInput
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
                      <CustomCheckboxInput
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
                      <CustomCheckboxInput
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
        </FilterCheckboxComponent_UL>
      </FilterCheckboxComponentWrapper>
    </>
  )
}

export default FilterCheckboxComponent
