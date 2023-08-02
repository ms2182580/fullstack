import { ButtonSmall } from "../../../../ui/buttons/general"
import { ST_M_Detail_TwoButtonsWrapper } from "./styles/ST_M_Detail_TwoButtonsWrapper"

export const ST_M_Detail_TwoButtons = () => {
  return (
    <ST_M_Detail_TwoButtonsWrapper>
      <ButtonSmall secondary>Email</ButtonSmall>
      <ButtonSmall secondary>Get Directions</ButtonSmall>
    </ST_M_Detail_TwoButtonsWrapper>
  )
}
