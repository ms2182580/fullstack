import { Dashboard_AIChatHistorySvg } from "@/assets/icons"
import { AIChat_D_HeaderWrapper } from "./styles/AIChat_D_HeaderWrapper"

export const AIChat_D_Header = () => {
  return (
    <AIChat_D_HeaderWrapper>
      <header>
        <span>
          <Dashboard_AIChatHistorySvg />
        </span>
      </header>
    </AIChat_D_HeaderWrapper>
  )
}
