import { useState } from "react"
import { P } from "../../../ui/heading_body_text/DesktopMobileFonts"
import { ORG_Filters_D_Checkbox_Input } from "./ORG_Filters_D_Checkbox_Input.js"
import { ORG_Filters_D_Checkbox_IsolatedWrapper } from "./styles/ORG_Filters_D_Checkbox_IsolatedWrapper.js"

export const ORG_Filters_D_Checkbox_Isolated = ({
  categoriesToDisplay = ["empty"],
  titleOnModal = ``,
  // shouldClearAllOptions,
}) => {
  const [showRemaining, setShowRemaining] = useState(
    categoriesToDisplay.length <= 3
  )
  const handleShowRemaining = () => {
    setShowRemaining(true)
  }

  const [shouldToggleAllOptions, setShouldToggleAllOptions] = useState(false)
  const handleToggleAll = (e) => {
    setShouldToggleAllOptions((prevState) => !prevState)
    handleShowRemaining()
  }

  const [allowSelection, setAllowSelection] = useState(true)

  const handleMouseDown = () => {
    setAllowSelection(false) // Allow selection on mouse down
  }

  const handleOnMouseLeave = () => {
    setAllowSelection(true)
  }

  return (
    <ORG_Filters_D_Checkbox_IsolatedWrapper allowSelection={allowSelection}>
      <P
        semibold
        onDoubleClick={handleToggleAll}
        onMouseDown={handleMouseDown}
        onMouseUp={handleOnMouseLeave}
      >
        {titleOnModal}
      </P>

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
                    // shouldClearAllOptions={shouldClearAllOptions}
                    shouldToggleAllOptions={shouldToggleAllOptions}
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
                className={showRemaining ? "showRemaining" : "notShowYet"}
              >
                <label>
                  <P>{x}</P>
                  <ORG_Filters_D_Checkbox_Input
                    type="checkbox"
                    name={x}
                    // shouldClearAllOptions={shouldClearAllOptions}
                    shouldToggleAllOptions={shouldToggleAllOptions}
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
                    // shouldClearAllOptions={shouldClearAllOptions}
                    shouldToggleAllOptions={shouldToggleAllOptions}
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
            <P semibold hyperlink_normal>
              See All
            </P>
          </span>
        )}
      </ul>
    </ORG_Filters_D_Checkbox_IsolatedWrapper>
  )
}
