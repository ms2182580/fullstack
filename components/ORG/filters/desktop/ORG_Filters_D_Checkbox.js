import { useRef, useState } from "react"
import { XDesktopSvg } from "../../../../assets/Icons/index.js"
import { useOutsideHide } from "../../../../utils/useOutsideHide.js"
import { ButtonSmall } from "../../../ui/buttons/general/index.js"
import { P } from "../../../ui/heading_body_text/DesktopMobileFonts.js"
import { ORG_Filters_D_Checkbox_Input } from "./ORG_Filters_D_Checkbox_Input.js"
import { ORG_Filters_D_CheckboxWrapper } from "./styles/ORG_Filters_D_CheckboxWrapper.js"

export const ORG_Filters_D_Checkbox = ({
  // clearAll,
  // dispatch,
  // setClearAll,
  // setFilterData,
  // setTempState,
  // shouldClearAllOptions,
  // showStateChildren,
  // tempState,
  // toUpdateFilters,
  buttonName = "noNameOnThisButton",
  categoriesToDisplay = ["nothing here"],
  titleOnModal
}) => {
  const [showRemaining, setShowRemaining] = useState(categoriesToDisplay.length <= 3)
  const handleShowRemaining = () => {
    setShowRemaining(true)
  }

  const [mustShowFilter, setMustShowFilter] = useState(false)
  const handleShowFilter = (e) => {
    if ((e.type === "keydown" && e.code === "Enter") || e.type === "click") {
      setMustShowFilter((prevState) => !prevState)
    }
  }

  const refContainer = useRef(null)
  useOutsideHide(refContainer, setMustShowFilter)

  const [shouldClearAllOptions, setShouldClearAllOptions] = useState(false)
  const handleShouldClearAllOptions = (e) => {
    if (e.type === "click" || e.key === "Enter" || e === "from useEffect") {
      setShouldClearAllOptions((prevState) => !prevState)
    }
  }

  /* 
  !FH0
  Make "Clear all" work
  */

  // const [show, setShow] = useState(false)
  // const handleShow = (e) => {
  //   if (e.type === "click" || e.key === "Enter") {
  //     setShow(prevState => !prevState)
  //   }
  // }

  // useEffect(() => {
  //   setMustShowFilter(false)
  // }, [clearAll])

  // useEffect(() => {
  //   setClearAll(false)
  //   showStateChildren(show)
  // }, [show])

  return (
    <ORG_Filters_D_CheckboxWrapper
      mustShowFilter={mustShowFilter}
      showRemaining={showRemaining}>
      <span onClick={handleShowFilter}>
        {!mustShowFilter ? <ButtonSmall secondary>{buttonName}</ButtonSmall> : <ButtonSmall>{buttonName}</ButtonSmall>}
      </span>

      <div ref={refContainer}>
        <span
          onClick={handleShowFilter}
          tabIndex={0}
          onKeyDown={handleShowFilter}>
          <XDesktopSvg />
        </span>

        <P semibold>{titleOnModal}</P>

        <ul>
          {categoriesToDisplay?.map((x, i) => {
            if (categoriesToDisplay.length > 4 && i < 3) {
              return (
                <li key={x}>
                  <label>
                    <P>{x}</P>
                    <ORG_Filters_D_Checkbox_Input
                      type="checkbox"
                      name={x}
                      shouldClearAllOptions={shouldClearAllOptions}
                    // dispatch={dispatch}
                    // tempState={tempState}
                    /* setTempState={setTempState} */
                    // setFilterData={setFilterData}
                    /* toUpdateFilters={toUpdateFilters}
          clearAll={clearAll}
          shouldClearAllOptions={shouldClearAllOptions} */
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
                    <ORG_Filters_D_Checkbox_Input
                      type="checkbox"
                      name={x}
                      shouldClearAllOptions={shouldClearAllOptions}
                    // dispatch={dispatch}
                    // tempState={tempState}
                    /* setTempState={setTempState} */
                    // setFilterData={setFilterData}
                    /* toUpdateFilters={toUpdateFilters}
          clearAll={clearAll}
          shouldClearAllOptions={shouldClearAllOptions} */
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
                    <ORG_Filters_D_Checkbox_Input
                      type="checkbox"
                      name={x}
                      shouldClearAllOptions={shouldClearAllOptions}
                    // dispatch={dispatch}
                    // tempState={tempState}
                    /* setTempState={setTempState} */
                    // setFilterData={setFilterData}
                    /* toUpdateFilters={toUpdateFilters}
          clearAll={clearAll}
          shouldClearAllOptions={shouldClearAllOptions} */
                    />
                    <span></span>
                  </label>
                </li>
              )
            }
          })}
          {categoriesToDisplay.length > 4 && showRemaining === false && (
            <span onClick={handleShowRemaining}>
              <P
                semibold
                hyperlink_normal>
                See All
              </P>
            </span>
          )}
        </ul>
        <div>
          <span
            onClick={handleShouldClearAllOptions}
            onKeyDown={handleShouldClearAllOptions}>
            <ButtonSmall secondary>Clear all</ButtonSmall>
          </span>
          <span>
            <ButtonSmall>Apply</ButtonSmall>
          </span>
        </div>
      </div>
    </ORG_Filters_D_CheckboxWrapper>
  )
}
