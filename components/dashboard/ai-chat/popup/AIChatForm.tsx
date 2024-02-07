import {
  Dashboard_AIChatAttechmentSvg,
  Dashboard_AIChatMicSvg,
  Dashboard_AIChatSendSvg,
} from "@/assets/icons"
import { AICHAT_FormWrapper } from "./styles/AIChatFormWrapper"
type Props = {
  input: string
  setInput: (value: string) => void
}
export const AIChat_PopupForm = ({ input, setInput }) => {
  return (
    <AICHAT_FormWrapper>
      <div>
        <Dashboard_AIChatAttechmentSvg />
        <Dashboard_AIChatMicSvg />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="ask me anything"
          />
          <Dashboard_AIChatSendSvg />
        </form>
      </div>
    </AICHAT_FormWrapper>
  )
}
