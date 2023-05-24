import { useWidthWindow1024 } from "../../../utils/useWidthWindow1024"
import { ButtonSmall } from "../../ui/buttons/general"
import { STDetail_TwoButtonsWrapper } from "./third-page/dekstop/styles/STDetail_TwoButtonsWrapper"

export const STDetail_TwoButtons = () => {
  const { isMobile } = useWidthWindow1024()

  return (
    <STDetail_TwoButtonsWrapper>
      <ButtonSmall secondary>{isMobile === false ? "Save to List" : "Email"}</ButtonSmall>
      <ButtonSmall secondary={isMobile ? "secondary" : ""}>
        {isMobile === false ? "Book Appointment" : "Get Directions"}
      </ButtonSmall>
    </STDetail_TwoButtonsWrapper>
  )
}
