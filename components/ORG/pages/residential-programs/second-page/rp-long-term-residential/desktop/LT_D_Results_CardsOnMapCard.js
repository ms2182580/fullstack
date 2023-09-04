import { PinResultsSvg } from "../../../../../../../assets/Icons/index.js"
import { LT_D_Results_CardsOnMapCardWrapper } from "./styles/LT_D_Results_CardsOnMapCardWrapper.js"

export const LT_D_Results_CardsOnMapCard = ({ top = 10, left = 10 }) => {
  return (
    <LT_D_Results_CardsOnMapCardWrapper
      top={top}
      left={left}>
      <PinResultsSvg />
    </LT_D_Results_CardsOnMapCardWrapper>
  )
}
