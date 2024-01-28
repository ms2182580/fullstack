import {
  Dashboard_AIChatAttechmentSvg,
  Dashboard_AIChatMicSvg,
  Dashboard_AIChatSendSvg,
} from "@/assets/icons"
import { AICHAT_FormWrapper } from "./styles/AICHAT_FormWrapper"

export const AICHAT_Form = () => {
  return (
    <AICHAT_FormWrapper>
      <div>
        <Dashboard_AIChatAttechmentSvg />
        <Dashboard_AIChatMicSvg />
        <form>
          <input type="text" placeholder="ask me anything" />
          <Dashboard_AIChatSendSvg />
        </form>
      </div>
    </AICHAT_FormWrapper>
  )
}
