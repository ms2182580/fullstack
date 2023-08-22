import { PinResultsSvg } from "../../../../../../../assets/Icons/index.js"
import { PSYT_D_Results_CardsOnMapCardWrapper } from "./styles/PSYT_D_Results_CardsOnMapCardWrapper.js"

export const PSYT_D_Results_CardsOnMapCard = ({ top = 10, left = 10 }) => {
  return (
    <PSYT_D_Results_CardsOnMapCardWrapper
      top={top}
      left={left}>
      <PinResultsSvg />
    </PSYT_D_Results_CardsOnMapCardWrapper>
  )
}
