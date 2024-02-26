import { PinResultsSvg } from "../../../../../assets/icons/index"
import { ORG_D_Results_CardsOnMapCardWrapper } from "./styles/ORG_D_Results_CardsOnMapCardWrapper.js"

export const ORG_D_Results_CardsOnMapCard = ({ top = 10, left = 10 }) => {
  return (
    <ORG_D_Results_CardsOnMapCardWrapper top={top} left={left}>
      <PinResultsSvg />
    </ORG_D_Results_CardsOnMapCardWrapper>
  )
}
