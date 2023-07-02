import { useWidthWindow1024 } from "../../../../../utils/useWidthWindow1024"
import { ButtonSmall } from "../../../../ui/buttons/general"
import { ST_M_Detail_TwoButtonsWrapper } from "./styles/ST_M_Detail_TwoButtonsWrapper"

export const ST_M_Detail_TwoButtons = () => {
  const { isMobile } = useWidthWindow1024()

  return (
    <ST_M_Detail_TwoButtonsWrapper>
      <ButtonSmall secondary>Email</ButtonSmall>
      <ButtonSmall secondary>Get Directions</ButtonSmall>
    </ST_M_Detail_TwoButtonsWrapper>
  )
}
