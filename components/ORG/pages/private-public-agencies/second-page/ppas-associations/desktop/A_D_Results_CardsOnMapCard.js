import { PinResultsSvg } from "../../../../../../../assets/Icons/index.js"
import { A_D_Results_CardsOnMapCardWrapper } from "./styles/A_D_Results_CardsOnMapCardWrapper.js"

export const A_D_Results_CardsOnMapCard = ({ top = 10, left = 10 }) => {
  return (
    <A_D_Results_CardsOnMapCardWrapper
      top={top}
      left={left}>
      <PinResultsSvg />
    </A_D_Results_CardsOnMapCardWrapper>
  )
}
