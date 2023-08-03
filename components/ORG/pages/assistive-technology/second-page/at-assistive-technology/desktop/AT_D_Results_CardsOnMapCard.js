import { PinSvgHover } from "../../../../../../../assets/Icons/index.js"
import { AT_D_Results_CardsOnMapCardWrapper } from "./styles/AT_D_Results_CardsOnMapCardWrapper.js"

export const AT_D_Results_CardsOnMapCard = ({ top = 10, left = 10 }) => {
  return (
    <AT_D_Results_CardsOnMapCardWrapper
      top={top}
      left={left}>
      <PinSvgHover />
    </AT_D_Results_CardsOnMapCardWrapper>
  )
}
