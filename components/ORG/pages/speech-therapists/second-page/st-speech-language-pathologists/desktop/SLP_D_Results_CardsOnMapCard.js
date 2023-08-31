import { PinResultsSvg } from "../../../../../../../assets/Icons/index.js"
import { SLP_D_Results_CardsOnMapCardWrapper } from "./styles/SLP_D_Results_CardsOnMapCardWrapper.js"

export const SLP_D_Results_CardsOnMapCard = ({ top = 10, left = 10 }) => {
  return (
    <SLP_D_Results_CardsOnMapCardWrapper
      top={top}
      left={left}>
      <PinResultsSvg />
    </SLP_D_Results_CardsOnMapCardWrapper>
  )
}
