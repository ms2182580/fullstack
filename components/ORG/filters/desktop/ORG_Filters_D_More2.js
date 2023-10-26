import { ButtonSmall } from "@/components/ui/buttons/general/index"
import { Fragment, cloneElement, useState } from "react"
import { XDesktopSvg } from "../../../../assets/Icons/index.js"
import { useShowFilters } from "../../../../utils/ORG/useShowFilters.js"
import { ORG_Filters_D_MoreWrapper2 } from "./styles/ORG_Filters_D_MoreWrapper2.js"

export const ORG_Filters_D_More2 = ({
  // allCheckboxes = [],
  // allRanges = [],
  // customButtonName = "More Filters",
  ...props
}) => {
  const { customButtonName = "More Filters", allCheckboxes = [] /* weight or any other character */, allRanges = [] } = props.props

  const className = props.shouldAddClassName

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
    <ORG_Filters_D_MoreWrapper2
      mustShowFilter={mustShowFilter}
      className={className && className}>
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
    </ORG_Filters_D_MoreWrapper2>
  )
}
