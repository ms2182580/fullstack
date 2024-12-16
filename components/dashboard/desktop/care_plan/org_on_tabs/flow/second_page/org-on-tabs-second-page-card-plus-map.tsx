import { useState } from "react"
import { OrgOnTabsSecondPageCardNoFilters } from "./org-on-tabs-second-page-card-no-filters"
import { OrgOnTabsSecondPageTypedFlow } from "./org-on-tabs-second-page-typed-flow"
import { OrgOnTabsSecondPageCardPlusMapWrapper } from "./styles/org-on-tabs-second-page-card-plus-map-wrapper"

const useIsTypedFlow = () => {
  return {
    isTypedFlow: false,
  }
}

export const OrgOnTabsSecondPageCardPlusMap = () => {
  const [isFullMap, setIsFullMap] = useState(false)

  const handleIsFullMap = (e) => {
    if (e.type === "click" || (e.key === "Enter" && e.type === "keydown")) {
      setIsFullMap((prevState) => !prevState)
    }
  }

  const { isTypedFlow } = useIsTypedFlow()

  return (
    <OrgOnTabsSecondPageCardPlusMapWrapper isFullMap={isFullMap}>
      {isTypedFlow ? (
        <OrgOnTabsSecondPageTypedFlow />
      ) : (
        <OrgOnTabsSecondPageCardNoFilters />
      )}

      <div>
        <div>map here</div>
      </div>
    </OrgOnTabsSecondPageCardPlusMapWrapper>
  )
}
