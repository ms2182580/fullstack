import { useEffect, useState } from "react"
import { P } from "../../../ui/heading_body_text/DesktopMobileFonts.js"
import { STResults_FilterCheckboxInput } from "./STResults_FilterCheckboxInput.js"
import {
  STResults_FilterCheckboxContainerULWrapper,
  STResults_FilterCheckboxContainerWrapper
} from "./styles/STResults_FilterCheckboxContainerWrapper.js"

export const STResults_FilterCheckboxContainer = ({
  state,
  dispatch,
  tempState,
  setTempState,
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
  const [showRemaining, setShowRemaining] = useState(categoriesToDisplay.length <= 3)
  const handleShowRemaining = () => {
    setShowRemaining(true)
  }

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
        <P semibold>{title}</P>
      </div>

      <STResults_FilterCheckboxContainerULWrapper
        show={show}
        showRemaining={showRemaining}>
        {
          // title.toLowerCase() === "agesServed"
          // ? categoriesToDisplay?.map((x) => {
          //     return (
          //       <li key={x}>
          //         <label>
          //           <P>{x}</P>
          //           <STResults_FilterCheckboxInput
          //             type="checkbox"
          //             name={x}
          //             dispatch={dispatch}
          //             setFilterData={setFilterData}
          //             toUpdateFilters={toUpdateFilters}
          //             clearAll={clearAll}
          //             shouldClear={shouldClear}
          //           />

          //           <span></span>
          //         </label>
          //       </li>
          //     )
          //   })
          // : title.toLowerCase() === "distance"
          // ? categoriesToDisplay?.map((x) => {
          //     return (
          //       <li key={x}>
          //         <label>
          //           <P>{x} miles</P>
          //           <STResults_FilterCheckboxInput
          //             type="checkbox"
          //             name={x}
          //             dispatch={dispatch}
          //             setFilterData={setFilterData}
          //             toUpdateFilters={toUpdateFilters}
          //             clearAll={clearAll}
          //             shouldClear={shouldClear}
          //           />

          //           <span></span>
          //         </label>
          //       </li>
          //     )
          //   })
          // :
          title.toLowerCase() === "view only"
            ? categoriesToDisplay?.map((x) => {
              return (
                <li key={x}>
                  <label className="viewOnly">
                    <P>{x}</P>
                    <STResults_FilterCheckboxInput
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
            })
            : categoriesToDisplay?.map((x, i) => {
              if (categoriesToDisplay.length > 4 && i < 3) {
                return (
                  <li key={x}>
                    <label>
                      <P>{x}</P>
                      <STResults_FilterCheckboxInput
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

              if (categoriesToDisplay.length > 4 && i >= 3) {
                return (
                  <li
                    key={x}
                    className={showRemaining ? "showRemaining" : "notShowYet"}>
                    <label>
                      <P>{x}</P>
                      <STResults_FilterCheckboxInput
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

              if (categoriesToDisplay.length <= 4) {
                return (
                  <li key={x}>
                    <label>
                      <P>{x}</P>
                      <STResults_FilterCheckboxInput
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
            })
        }

        {categoriesToDisplay.length > 4 && showRemaining === false && (
          <span onClick={handleShowRemaining}>
            <P
              semibold
              hyperlink_normal>
              See All
            </P>
          </span>
        )}
      </STResults_FilterCheckboxContainerULWrapper>
    </STResults_FilterCheckboxContainerWrapper>
  )
}
