import { useState } from "react"
import { P } from "../../../ui/heading_body_text/DesktopMobileFonts.js"
import { ORG_Filters_D_Checkbox_Input } from "./ORG_Filters_D_Checkbox_Input.js"
import { ORG_Filters_D_Checkbox_IsolatedWrapper } from "./styles/ORG_Filters_D_Checkbox_IsolatedWrapper.js"

export const ORG_Filters_D_Checkbox_Isolated = ({
  categoriesToDisplay = ["empty"],
  titleOnModal = ` ${ORG_Filters_D_Checkbox_Isolated.name}: titleOnModal`,
  shouldClearAllOptions,
}) => {
  const [showRemaining, setShowRemaining] = useState(categoriesToDisplay.length <= 3)
  const handleShowRemaining = () => {
    setShowRemaining(true)
  }

  return (
    <ORG_Filters_D_Checkbox_IsolatedWrapper>
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
    </ORG_Filters_D_Checkbox_IsolatedWrapper>
  )
}
