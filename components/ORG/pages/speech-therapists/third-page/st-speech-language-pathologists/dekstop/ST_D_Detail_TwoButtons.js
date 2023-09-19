import { ButtonSmall } from "../../../../../../ui/buttons/general"
import { ST_D_Detail_TwoButtonsWrapper } from "./styles/ST_D_Detail_TwoButtonsWrapper"

export const ST_D_Detail_TwoButtons = () => {
  return (
    <ST_D_Detail_TwoButtonsWrapper>
      <ButtonSmall secondary>Save to List</ButtonSmall>
      <ButtonSmall>Book Appointment</ButtonSmall>
    </ST_D_Detail_TwoButtonsWrapper>
  )
}
