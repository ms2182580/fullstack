import { Dashboard_AIChatInfoSvg } from "@/assets/icons"
import { AIChat_SuggestionsResponseWrapper } from "./styles/AIChat_SuggestionsResponseWrapper"

export const AIChat_SuggestionsResponse = () => {
  return (
    <AIChat_SuggestionsResponseWrapper>
      <Dashboard_AIChatInfoSvg />
      <span>I have a question</span>
      <span>I'm finished selecting</span>
    </AIChat_SuggestionsResponseWrapper>
  )
}
