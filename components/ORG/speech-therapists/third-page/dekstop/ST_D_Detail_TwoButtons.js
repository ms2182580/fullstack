import { useWidthWindow1024 } from "../../../../../utils/useWidthWindow1024"
import { ButtonSmall } from "../../../../ui/buttons/general"
import { ST_D_Detail_TwoButtonsWrapper } from "./styles/ST_D_Detail_TwoButtonsWrapper"

export const ST_D_Detail_TwoButtons = () => {
  const { isMobile } = useWidthWindow1024()

  return (
    <ST_D_Detail_TwoButtonsWrapper>
      <ButtonSmall secondary>{isMobile === false ? "Save to List" : "Email"}</ButtonSmall>
      <ButtonSmall secondary={isMobile ? "secondary" : ""}>
        {isMobile === false ? "Book Appointment" : "Get Directions"}
      </ButtonSmall>
    </ST_D_Detail_TwoButtonsWrapper>
  )
}
