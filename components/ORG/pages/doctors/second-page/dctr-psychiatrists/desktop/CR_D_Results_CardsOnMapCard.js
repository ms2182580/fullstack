import { PinResultsSvg } from "../../../../../../../assets/Icons/index.js"
import { CR_D_Results_CardsOnMapCardWrapper } from "./styles/CR_D_Results_CardsOnMapCardWrapper.js"

export const CR_D_Results_CardsOnMapCard = ({ top = 10, left = 10 }) => {
  return (
    <CR_D_Results_CardsOnMapCardWrapper
      top={top}
      left={left}>
      <PinResultsSvg />
    </CR_D_Results_CardsOnMapCardWrapper>
  )
}
