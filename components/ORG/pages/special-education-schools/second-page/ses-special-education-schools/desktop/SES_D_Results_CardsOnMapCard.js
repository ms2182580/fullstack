import { PinResultsSvg } from "../../../../../../../assets/Icons/index.js"
import { SES_D_Results_CardsOnMapCardWrapper } from "./styles/SES_D_Results_CardsOnMapCardWrapper.js"

export const SES_D_Results_CardsOnMapCard = ({ top = 10, left = 10 }) => {
  return (
    <SES_D_Results_CardsOnMapCardWrapper
      top={top}
      left={left}>
      <PinResultsSvg />
    </SES_D_Results_CardsOnMapCardWrapper>
  )
}
