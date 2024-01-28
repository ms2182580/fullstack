import { INDEX_D_AICHATWrapper } from "./styles/INDEX_D_AICHATWrapper"
import { AIChat_D_Header } from "./AIChat_Header"
import { AIChat_Suggestions } from "./AIChat_Suggestions"
import { AICHAT_Form } from "./AIChat_Form"

export const INDEX_D_AICHAT = () => {
  return (
    <INDEX_D_AICHATWrapper>
      <AIChat_D_Header />
      <AIChat_Suggestions />
      <AICHAT_Form />
    </INDEX_D_AICHATWrapper>
  )
}
