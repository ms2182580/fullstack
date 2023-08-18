import { Fragment, cloneElement, useState } from "react"
import { XDesktopSvg } from "../../../../assets/Icons/index.js"
import { useShowFilters } from "../../../../utils/ORG/useShowFilters.js"
import { ButtonSmall } from "../../../ui/buttons/general/index.js"
import { ORG_Filters_D_MoreWrapper } from "./styles/ORG_Filters_D_MoreWrapper.js"

/* 

!FH0

https://codesandbox.io/s/ecstatic-babycat-v9738m?file=/src/App.js
*/

export const ORG_Filters_D_More = ({ allCheckboxes = [], allRanges = [], customButtonName = "More Filters", titleOnModal }) => {
  // console.log('allCheckboxes:', allCheckboxes)
  // console.log("allRanges:", allRanges)
  // const { setModalShowedCtx } = useCtx_ShowModal()
  // const [mustShowFilter, setMustShowFilter] = useState(false)
  // const handleShowFilter = (e) => {
  //   if ((e.type === "keydown" && e.code === "Enter") || e.type === "click") {
  //     setMustShowFilter((prevState) => !prevState)
  //   }
  // }

  // useEffect(() => {
  //   setModalShowedCtx((prevState) => !prevState)
  // }, [mustShowFilter])

  // useEffect(() => {
  //   setModalShowedCtx(false)
  // }, [])

  // const refContainer = useRef(null)
  // useOutsideHide(refContainer, setMustShowFilter)

  const { mustShowFilter, handleShowFilter, refContainer } = useShowFilters()

  const [shouldClearAllOptions, setShouldClearAllOptions] = useState(false)
  const handleShouldClearAllOptions = (e) => {
    if (e.type === "click" || e.key === "Enter") {
      setShouldClearAllOptions((prevState) => !prevState)
    }
  }

  return (
    <ORG_Filters_D_MoreWrapper mustShowFilter={mustShowFilter}>
      <span onClick={handleShowFilter}>{!mustShowFilter ? <ButtonSmall secondary>{customButtonName}</ButtonSmall> : <ButtonSmall>{customButtonName}</ButtonSmall>}</span>

      <div ref={refContainer}>
        <span
          onClick={handleShowFilter}
          onKeyDown={handleShowFilter}
          tabIndex={0}>
          <XDesktopSvg />
        </span>

        <div className="rangeMoreFilters">
          {allRanges.map((x, i) => {
            return (
              <>
                <Fragment key={i}>{cloneElement(x, { shouldClearAllOptions: shouldClearAllOptions })}</Fragment>
              </>
            )
          })}
        </div>

        <div className="checkboxesMoreFilters">
          {allCheckboxes.map((x, i) => {
            return (
              <>
                <Fragment key={i}>{cloneElement(x, { shouldClearAllOptions: shouldClearAllOptions })}</Fragment>
              </>
            )
          })}
        </div>

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
    </ORG_Filters_D_MoreWrapper>
  )
}
