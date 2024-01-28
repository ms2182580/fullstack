import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { AIChat_Conversation_IndividualWrapper } from "./styles/AIChat_Conversation_IndividualWrapper"
import {
  Dashbaord_AIChatResponseAttechment,
  Dashbaord_AIChatResponseCopy,
  Dashbaord_AIChatResponseDelete,
  Dashbaord_AIChatResponseDislike,
  Dashbaord_AIChatResponseLike,
  Dashbaord_AIChatResponseResend,
} from "@/assets/icons"
type Props = {
  message: string
  isSender: boolean
}
export const AIChat_Conversation_Individual = ({
  message,
  isSender,
}: Props) => {
  return (
    <AIChat_Conversation_IndividualWrapper isSender={isSender}>
      <P className="message">
        <span>{message}</span>
      </P>
      <div className="response-group">
        <span>
          <Dashbaord_AIChatResponseAttechment />
        </span>
        <span>
          <Dashbaord_AIChatResponseLike />
        </span>
        <span>
          <Dashbaord_AIChatResponseDislike />
        </span>
        <span>
          <Dashbaord_AIChatResponseCopy />
        </span>
        <span>
          <Dashbaord_AIChatResponseResend />
        </span>
        <span>
          <Dashbaord_AIChatResponseDelete />
        </span>
      </div>
    </AIChat_Conversation_IndividualWrapper>
  )
}
