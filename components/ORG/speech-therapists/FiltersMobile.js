import { useState } from "react"
import { ORG_Mobile_FilterIcon } from "../../../assets/Icons/index.js"
import { Caption } from "../../ui/heading_body_text/DesktopMobileFonts.js"
import { FiltersMobileWrapper } from "./styles/FiltersMobileWrapper.js"

export const FiltersMobile = () => {
  const [mustShowFilters, setMustShowFilters] = useState(false)

  const handleShowFilters = () => {
    setMustShowFilters((prevState) => !prevState)
  }

  return (
    <>
      <FiltersMobileWrapper onClick={handleShowFilters}>
        <Caption
          bolder
          primary_cta>
          Advanced Filters
        </Caption>
        <ORG_Mobile_FilterIcon />
        {/* {mustShowFilters ? <>Showing filters</> : null} */}
      </FiltersMobileWrapper>

      
    </>
  )
}
