import { useState } from "react"
import { OrgOnTabsSecondPageCardPlusMapWrapper } from "./styles/org-on-tabs-second-page-card-plus-map-wrapper"

const emulateCards = Array(3).fill(0)

export const OrgOnTabsSecondPageCardPlusMap = () => {
  const [isFullMap, setIsFullMap] = useState(false)

  const handleIsFullMap = (e) => {
    if (e.type === "click" || (e.key === "Enter" && e.type === "keydown")) {
      setIsFullMap((prevState) => !prevState)
    }
  }

  return (
    <OrgOnTabsSecondPageCardPlusMapWrapper isFullMap={isFullMap}>
      <ul>
        {emulateCards.map((x, i) => {
          return (
            <li key={i}>
              <div>Card {i + 1}</div>
            </li>
          )
        })}
      </ul>
      <div>
        <div>map here</div>
      </div>
    </OrgOnTabsSecondPageCardPlusMapWrapper>
  )
}
