import { EmailORGSvg } from "../../../../../assets/icons/index.js"
import { P } from "../../../../ui/heading_body_text/DesktopMobileFonts.js"
import { ORG_D_Detail_CardEmailWrapper } from "./styles/ORG_D_Detail_CardEmailWrapper"

type Props = {
  email: string
}

export const ORG_D_Detail_CardEmail = ({ email }: Props) => {
  return (
    <ORG_D_Detail_CardEmailWrapper shouldShow={email !== ""}>
      <div>
        <EmailORGSvg />
        <P>Email:</P>
      </div>

      <P tabIndex={0}>{email}</P>
    </ORG_D_Detail_CardEmailWrapper>
  )
}
