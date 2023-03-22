import { useWidthWindow1024 } from "../../../utils/useWidthWindow1024"
import { ButtonSmall } from "../../ui/buttons/general"
import { ST_TwoButtonsWrapper } from "./styles/STDetail_EmailGetDirectionWrapper"

export const ST_TwoButtons = () => {
  const { isMobile } = useWidthWindow1024()

  return (
    <ST_TwoButtonsWrapper>
      <ButtonSmall secondary>{isMobile === false ? "Save to List" : "Email"}</ButtonSmall>
      <ButtonSmall secondary={isMobile ? "secondary" : ""}>
        {isMobile === false ? "Book Appointment" : "Get Directions"}
      </ButtonSmall>
    </ST_TwoButtonsWrapper>
  )
}
