import { useWidthWindow1024 } from "../../../utils/useWidthWindow1024"
import { ButtonSmall } from "../../ui/buttons/general"
import { STDetail_EmailGetDirectionWrapper } from "./styles/STDetail_EmailGetDirectionWrapper"

export const EmailGetDirectionComponent = () => {
  const { isMobile } = useWidthWindow1024()

  return (
    <STDetail_EmailGetDirectionWrapper>
      <ButtonSmall secondary>{isMobile === false ? "Save to List" : "Email"}</ButtonSmall>
      <ButtonSmall secondary>{isMobile === false ? "Book Appointment" : "Get Directions"}</ButtonSmall>
    </STDetail_EmailGetDirectionWrapper>
  )
}
