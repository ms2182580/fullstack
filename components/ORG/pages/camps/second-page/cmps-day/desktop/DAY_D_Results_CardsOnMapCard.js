import { PinResultsSvg } from "../../../../../../../assets/Icons/index.js"
import { DAY_D_Results_CardsOnMapCardWrapper } from "./styles/DAY_D_Results_CardsOnMapCardWrapper.js"

export const DAY_D_Results_CardsOnMapCard = ({ top = 10, left = 10 }) => {
  return (
    <DAY_D_Results_CardsOnMapCardWrapper
      top={top}
      left={left}>
      <PinResultsSvg />
    </DAY_D_Results_CardsOnMapCardWrapper>
  )
}
