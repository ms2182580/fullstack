import { PinResultsSvg } from "../../../../../../../assets/Icons/index.js"
import { CC_D_Results_CardsOnMapCardWrapper } from "./styles/CC_D_Results_CardsOnMapCardWrapper.js"

export const CC_D_Results_CardsOnMapCard = ({ top = 10, left = 10 }) => {
  return (
    <CC_D_Results_CardsOnMapCardWrapper
      top={top}
      left={left}>
      <PinResultsSvg />
    </CC_D_Results_CardsOnMapCardWrapper>
  )
}
