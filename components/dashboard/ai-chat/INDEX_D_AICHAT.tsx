import { INDEX_D_AICHATWrapper } from "./styles/INDEX_D_AICHATWrapper"
import { AIChat_D_Header } from "./AIChat_Header"
import { AIChat_Suggestions } from "./AIChat_Suggestions"
import { AICHAT_Form } from "./AIChat_Form"
import { useState } from "react"
import { AIChat_Conversation } from "./AIChat_Conversation"

export const INDEX_D_AICHAT = () => {
  const [input, setInput] = useState("")
  return (
    <INDEX_D_AICHATWrapper>
      <AIChat_D_Header />
      {input ? <AIChat_Conversation /> : <AIChat_Suggestions />}
      <AICHAT_Form setInput={setInput} input={input} />
    </INDEX_D_AICHATWrapper>
  )
}
