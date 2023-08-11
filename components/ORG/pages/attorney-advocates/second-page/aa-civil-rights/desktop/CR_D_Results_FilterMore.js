import { useEffect, useRef, useState } from "react"
import { XDesktopSvg } from "../../../../../../../assets/Icons/index.js"
import { useCtx_ShowModal } from "../../../../../../../context/Ctx_ShowModal.js"
import { useOutsideHide } from "../../../../../../../utils/useOutsideHide.js"
import { ButtonSmall } from "../../../../../../ui/buttons/general/index.js"
import { P } from "../../../../../../ui/heading_body_text/DesktopMobileFonts.js"
import { ORG_Filters_D_Checkbox_Input } from "../../../../../filters/desktop/ORG_Filters_D_Checkbox_Input.js"
import { CR_D_Results_FilterMoreWrapper } from "./styles/CR_D_Results_FilterMoreWrapper.js"

const categoriesToDisplay = ["first", "second"]

export const CR_D_Results_FilterMore = () => {
  const { modalShowedCtx, setModalShowedCtx } = useCtx_ShowModal()
  const [mustShowFilter, setMustShowFilter] = useState(false)
  const handleShowFilter = (e) => {
    if ((e.type === "keydown" && e.code === "Enter") || e.type === "click") {
      setMustShowFilter((prevState) => !prevState)
    }
  }

  useEffect(() => {
    setModalShowedCtx((prevState) => !prevState)
  }, [mustShowFilter])

  const refContainer = useRef(null)
  useOutsideHide(refContainer, setMustShowFilter)

  const [shouldClearAllOptions, setShouldClearAllOptions] = useState(false)
  const handleShouldClearAllOptions = (e) => {
    if (e.type === "click" || e.key === "Enter" || e === "from useEffect") {
      setShouldClearAllOptions((prevState) => !prevState)
    }
  }

  return (
    <CR_D_Results_FilterMoreWrapper mustShowFilter={mustShowFilter}>
      <span onClick={handleShowFilter}>{!mustShowFilter ? <ButtonSmall secondary>More</ButtonSmall> : <ButtonSmall>More</ButtonSmall>}</span>

      <div ref={refContainer}>
        <span
          onClick={handleShowFilter}
          tabIndex={0}
          onKeyDown={handleShowFilter}>
          <XDesktopSvg />
        </span>

        {/* <P semibold>{titleOnModal || buttonName}</P> */}

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
    </CR_D_Results_FilterMoreWrapper>
  )
}
