import { VerifiedTicketSvg } from "../../../assets/Icons/index.js"
import { Caption } from "../../ui/heading_body_text/DesktopMobileFonts.js"
import { VerifiedWrapper } from "./styles/VerifiedWrapper.js"


export const Verified = () => {
  return (
    <VerifiedWrapper>
      <VerifiedTicketSvg/>
      <Caption>Verified</Caption>
    </VerifiedWrapper>
  )
}
