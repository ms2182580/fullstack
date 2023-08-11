import { ORG_Filters_D_Checkbox_IsolatedWrapper } from './styles/ORG_Filters_D_Checkbox_IsolatedWrapper.js'

export const ORG_Filters_D_Checkbox_Isolated = ({ theRef, theOnClick, theOnKeyDown }) => {
  return (
    <ORG_Filters_D_Checkbox_IsolatedWrapper>
      <div ref={refContainer}>
        <span
          onClick={handleShowFilter}
          tabIndex={0}
          onKeyDown={handleShowFilter}>
          <XDesktopSvg />
        </span>

        <P semibold>{titleOnModal || buttonName}</P>

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

      </div>
    </ORG_Filters_D_Checkbox_IsolatedWrapper>
  )
}