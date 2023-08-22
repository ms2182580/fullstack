import { PinResultsSvg } from "../../../../../../../assets/Icons/index.js"
import { MH_D_Results_CardsOnMapCardWrapper } from "./styles/MH_D_Results_CardsOnMapCardWrapper.js"

export const MH_D_Results_CardsOnMapCard = ({ top = 10, left = 10 }) => {
  return (
    <MH_D_Results_CardsOnMapCardWrapper
      top={top}
      left={left}>
      <PinResultsSvg />
    </MH_D_Results_CardsOnMapCardWrapper>
  )
}
